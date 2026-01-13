import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

// Configuration with defaults
function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  
  if (!host || !user || !pass) {
    return null;
  }

  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const secureEnv = process.env.SMTP_SECURE?.toLowerCase();
  const secure = secureEnv ? secureEnv === "true" : port === 465;

  return {
    host,
    port,
    secure,
    user,
    pass,
    from: process.env.SMTP_FROM || user,
    to: process.env.SMTP_TO || "info@reintenspark.com",
  };
}

const requiredEnv = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"] as const;

function getMissingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

// Connection pool singleton
let transporter: nodemailer.Transporter | null = null;
let transporterVerified = false;

// Advanced transporter with connection pooling and optimizations
function getTransporter(config: SmtpConfig): nodemailer.Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
      // Connection pooling for better performance
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      // Timeouts
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 30000, // 30 seconds for slow networks
      // TLS options for security
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === "production",
        minVersion: "TLSv1.2",
      },
      // Debug in development
      debug: process.env.NODE_ENV === "development",
      logger: process.env.NODE_ENV === "development",
    });

    // Handle pool errors gracefully
    transporter.on("error", (error) => {
      console.error("SMTP transporter error:", error);
      transporterVerified = false;
    });

    // Log when pool is idle
    transporter.on("idle", () => {
      if (process.env.NODE_ENV === "development") {
        console.log("SMTP connection pool idle");
      }
    });
  }
  return transporter;
}

// Verify SMTP connection before sending
async function verifyConnection(transport: nodemailer.Transporter): Promise<boolean> {
  if (transporterVerified) {
    return true;
  }
  
  try {
    await transport.verify();
    transporterVerified = true;
    console.info("SMTP connection verified successfully");
    return true;
  } catch (error) {
    console.error("SMTP verification failed:", error);
    transporterVerified = false;
    return false;
  }
}

type SendMailResult = { 
  messageId?: string;
  envelope?: { from: string; to: string[] };
  accepted?: string[];
  rejected?: string[];
  response?: string;
  // Required for Ethereal preview URLs
  pending?: string[];
};

// Retry logic for transient failures
async function sendWithRetry(
  transport: nodemailer.Transporter,
  mailOptions: nodemailer.SendMailOptions,
  maxRetries = 3
): Promise<SendMailResult> {
  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await transport.sendMail(mailOptions);
      return result as SendMailResult;
    } catch (error) {
      lastError = error as Error;
      const isRetryable = isRetryableError(error);
      
      if (isRetryable && attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000); // Exponential backoff, max 5s
        console.warn(`SMTP attempt ${attempt} failed, retrying in ${delay}ms...`, error);
        await sleep(delay);
        
        // Reset transporter on connection errors
        if (isConnectionError(error)) {
          transporter = null;
          transporterVerified = false;
        }
      } else {
        break;
      }
    }
  }
  
  throw lastError;
}

function isRetryableError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const message = error.message.toLowerCase();
  const retryablePatterns = [
    "timeout",
    "econnreset",
    "econnrefused",
    "etimedout",
    "esocket",
    "connection",
    "temporarily",
    "try again",
    "rate limit",
  ];
  return retryablePatterns.some((pattern) => message.includes(pattern));
}

function isConnectionError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const message = error.message.toLowerCase();
  return ["econnreset", "econnrefused", "etimedout", "esocket"].some((e) => message.includes(e));
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;");
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email) && email.length <= 254;
}

function sanitizePayload(payload: Partial<ContactPayload>): ContactPayload | null {
  const name = payload.name?.toString().trim().slice(0, 200);
  const email = payload.email?.toString().trim().toLowerCase().slice(0, 254);
  const company = payload.company?.toString().trim().slice(0, 200);
  const message = payload.message?.toString().trim().slice(0, 5000);

  if (!name || !email || !message) {
    return null;
  }

  if (!isValidEmail(email)) {
    return null;
  }

  return {
    name,
    email,
    message,
    company,
  };
}

// Rate limiting (simple in-memory, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

// Build HTML email body
function buildHtmlBody(payload: ContactPayload, clientIp: string, timestamp: string): string {
  const companyRow = payload.company ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Organization:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${escapeHtml(payload.company)}</td>
            </tr>` : "";

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
  </div>
  <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151; width: 120px;">Name:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${escapeHtml(payload.name)}</td>
      </tr>
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; color: #374151;">Email:</td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${escapeHtml(payload.email)}" style="color: #667eea; text-decoration: none;">${escapeHtml(payload.email)}</a></td>
      </tr>${companyRow}
      <tr>
        <td style="padding: 12px 0; font-weight: 600; color: #374151; vertical-align: top;">Message:</td>
        <td style="padding: 12px 0; color: #1f2937; white-space: pre-wrap;">${escapeHtml(payload.message).replaceAll("\n", "<br>")}</td>
      </tr>
    </table>
    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
      <p style="margin: 0;">Submitted at: ${timestamp}</p>
      <p style="margin: 5px 0 0;">IP: ${escapeHtml(clientIp)}</p>
    </div>
  </div>
</body>
</html>`;
}

// Build plain text email body
function buildPlainText(payload: ContactPayload, clientIp: string, timestamp: string): string {
  const companyLine = payload.company ? `Organization: ${payload.company}\n` : "";
  const separator = "=".repeat(40);
  return `New Contact Form Submission\n${separator}\n\nName: ${payload.name}\nEmail: ${payload.email}\n${companyLine}\nMessage:\n${payload.message}\n\n${separator}\nSubmitted at: ${timestamp}\nIP: ${clientIp}`;
}

// Build mail options
function buildMailOptions(
  config: SmtpConfig,
  payload: ContactPayload,
  clientIp: string
): nodemailer.SendMailOptions {
  const timestamp = new Date().toISOString();
  return {
    from: { name: "ReInternSpark Contact Form", address: config.from },
    to: config.to,
    replyTo: { name: payload.name, address: payload.email },
    subject: `[Contact] ${payload.name} - New inquiry`,
    text: buildPlainText(payload, clientIp, timestamp),
    html: buildHtmlBody(payload, clientIp, timestamp),
    headers: { "X-Priority": "3", "X-Mailer": "ReInternSpark Contact Form" },
  };
}

// Generate Ethereal preview URL for test emails
function getEtherealPreviewUrl(info: SendMailResult): string | null {
  // Check if using Ethereal (test email service)
  const host = process.env.SMTP_HOST?.toLowerCase();
  if (!host?.includes("ethereal")) return null;
  
  // Use nodemailer's built-in function for Ethereal URLs
  // It requires the full info object to work correctly
  try {
    const url = nodemailer.getTestMessageUrl(info as Parameters<typeof nodemailer.getTestMessageUrl>[0]);
    return url || null;
  } catch {
    return null;
  }
}

// Map error to user-friendly response
function getErrorResponse(errorMessage: string): { message: string; status: number } {
  if (errorMessage.includes("auth") || errorMessage.includes("credential")) {
    return { message: "Email service authentication error. Please contact us directly.", status: 503 };
  }
  if (errorMessage.includes("timeout") || errorMessage.includes("ETIMEDOUT")) {
    return { message: "Email service timed out. Please try again.", status: 504 };
  }
  return { message: "Unable to send your message right now. Please try again later or contact us directly.", status: 500 };
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const clientIp = getClientIp(request);

  // Rate limiting check
  if (isRateLimited(clientIp)) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return NextResponse.json(
      { message: "Too many requests. Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  // Check SMTP configuration
  const missingEnv = getMissingEnv();
  if (missingEnv.length > 0) {
    console.error(`SMTP configuration incomplete: ${missingEnv.join(", ")}`);
    return NextResponse.json(
      { message: "Email service is not configured. Please contact us directly." },
      { status: 503 }
    );
  }

  const config = getSmtpConfig();
  if (!config) {
    return NextResponse.json(
      { message: "Email service configuration error." },
      { status: 503 }
    );
  }

  // Parse request body
  let rawPayload: unknown;
  try {
    rawPayload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request format." }, { status: 400 });
  }

  const payload = sanitizePayload(rawPayload as Partial<ContactPayload>);
  if (!payload) {
    return NextResponse.json(
      { message: "Please provide a valid name, email address and message." },
      { status: 400 }
    );
  }

  // Verify SMTP connection
  const transport = getTransporter(config);
  const isVerified = await verifyConnection(transport);
  if (!isVerified) {
    return NextResponse.json(
      { message: "Email service temporarily unavailable. Please try again later." },
      { status: 503 }
    );
  }

  // Send email
  try {
    const mailOptions = buildMailOptions(config, payload, clientIp);
    const info = await sendWithRetry(transport, mailOptions);

    // Generate Ethereal preview URL for test emails
    const previewUrl = getEtherealPreviewUrl(info);

    console.info("Contact email sent successfully", {
      messageId: info.messageId,
      duration: `${Date.now() - startTime}ms`,
      from: payload.email,
      ...(previewUrl && { previewUrl }),
    });

    return NextResponse.json({
      ok: true,
      message: "Your message has been sent successfully. We'll get back to you soon!"
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("SMTP send failed", {
      error: errorMessage,
      duration: `${Date.now() - startTime}ms`,
    });

    const errorResponse = getErrorResponse(errorMessage);
    return NextResponse.json({ message: errorResponse.message }, { status: errorResponse.status });
  }
}

// Health check endpoint for monitoring
export async function GET() {
  const config = getSmtpConfig();
  
  if (!config) {
    return NextResponse.json(
      { status: "error", message: "SMTP not configured" },
      { status: 503 }
    );
  }

  try {
    const transport = getTransporter(config);
    await transport.verify();
    
    return NextResponse.json({
      status: "ok",
      smtp: {
        host: config.host,
        port: config.port,
        secure: config.secure,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { 
        status: "error", 
        message: error instanceof Error ? error.message : "Connection failed" 
      },
      { status: 503 }
    );
  }
}
