#!/usr/bin/env node

/**
 * SMTP Configuration Test Script
 * 
 * This script tests your SMTP configuration without starting the full Next.js server.
 * 
 * Usage:
 *   node test-smtp.js
 * 
 * Make sure to configure .env.local before running this test.
 */

import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Load .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env.local') });

console.log('\n🔧 SMTP Configuration Test\n');
console.log('━'.repeat(50));

// Read configuration
const config = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
  from: process.env.SMTP_FROM || process.env.SMTP_USER,
  to: process.env.SMTP_TO || 'info@reintenspark.com',
};

// Validate configuration
const missing = [];
if (!config.host) missing.push('SMTP_HOST');
if (!config.user) missing.push('SMTP_USER');
if (!config.pass) missing.push('SMTP_PASS');

if (missing.length > 0) {
  console.error('❌ Missing required environment variables:');
  missing.forEach(key => console.error(`   - ${key}`));
  console.error('\n💡 Please configure .env.local file first.');
  console.error('   See SMTP_SETUP_GUIDE.md for instructions.\n');
  process.exit(1);
}

// Display configuration
console.log('📋 Configuration:');
console.log(`   Host:     ${config.host}`);
console.log(`   Port:     ${config.port}`);
console.log(`   Secure:   ${config.secure}`);
console.log(`   User:     ${config.user}`);
console.log(`   Password: ${'*'.repeat(Math.min(config.pass.length, 16))}`);
console.log(`   From:     ${config.from}`);
console.log(`   To:       ${config.to}`);
console.log('━'.repeat(50));

// Create transporter
const transporter = nodemailer.createTransport({
  host: config.host,
  port: config.port,
  secure: config.secure,
  auth: {
    user: config.user,
    pass: config.pass,
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certs in testing
  },
});

// Test connection
console.log('\n🔍 Testing SMTP connection...\n');

try {
  await transporter.verify();
  console.log('✅ SMTP connection successful!\n');
  console.log('📧 Sending test email to:', config.to);
  
  // Send test email
  const info = await transporter.sendMail({
    from: {
      name: 'ReInternSpark Contact Form',
      address: config.from,
    },
    to: config.to,
    subject: '[Test] SMTP Configuration Test',
    text: `This is a test email from ReInternSpark Contact Form.\n\nTimestamp: ${new Date().toISOString()}\n\nIf you received this email, your SMTP configuration is working correctly!`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>SMTP Test</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">✅ SMTP Test Successful</h1>
        </div>
        <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
          <p>This is a test email from <strong>ReInternSpark Contact Form</strong>.</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          <p style="color: #16a34a; font-weight: 600;">✅ If you received this email, your SMTP configuration is working correctly!</p>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="font-size: 14px; color: #6b7280; margin: 0;">Configuration Details:</p>
            <ul style="font-size: 14px; color: #6b7280;">
              <li>Host: ${config.host}</li>
              <li>Port: ${config.port}</li>
              <li>From: ${config.from}</li>
              <li>To: ${config.to}</li>
            </ul>
          </div>
        </div>
      </body>
      </html>
    `,
  });

  console.log('\n✅ Test email sent successfully!\n');
  console.log('📋 Email Details:');
  console.log(`   Message ID: ${info.messageId}`);
  console.log(`   Response:   ${info.response}`);
  
  // Check for Ethereal preview URL
  const previewUrl = nodemailer.getTestMessageUrl(info);
  if (previewUrl) {
    console.log(`   Preview:    ${previewUrl}`);
  }
  
  console.log('\n✅ All tests passed! Your SMTP configuration is working correctly.');
  console.log(`   Check ${config.to} inbox for the test email.\n`);
  process.exit(0);
} catch (error) {
  console.error('\n❌ SMTP test failed!\n');
  console.error('Error:', error.message);
  
  // Provide helpful error messages
  const errorMsg = error.message.toLowerCase();
  
  console.error('\n💡 Troubleshooting tips:');
  
  if (errorMsg.includes('auth') || errorMsg.includes('credential')) {
    console.error('   - Check that SMTP_USER and SMTP_PASS are correct');
    console.error('   - For Gmail, use an App Password (not your account password)');
    console.error('   - See: https://support.google.com/accounts/answer/185833');
  } else if (errorMsg.includes('econnrefused') || errorMsg.includes('enotfound')) {
    console.error('   - Check that SMTP_HOST is correct');
    console.error('   - Verify your internet connection');
    console.error('   - Check if your firewall is blocking the connection');
  } else if (errorMsg.includes('timeout')) {
    console.error('   - Check your internet connection');
    console.error('   - Some networks block SMTP ports (587, 465)');
    console.error('   - Try a different network or VPN');
  } else {
    console.error('   - Review SMTP_SETUP_GUIDE.md for configuration help');
    console.error('   - Double-check all environment variables in .env.local');
  }
  
  console.error('\n');
  process.exit(1);
}
