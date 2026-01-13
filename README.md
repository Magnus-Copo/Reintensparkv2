## Reinternspark Marketing Site

Next.js application for showcasing Reinternspark courses, labs, and R&D practice areas. The project now includes an SMTP-backed contact form so inbound messages land in your inbox instead of disappearing into the void.

## Getting Started

```bash
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to browse the site. Content lives under `src/app` (pages) and `src/components` (shared UI).

## Environment Variables

Create a `.env.local` file with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com            # required - your SMTP server
SMTP_PORT=587                       # optional - defaults to 587
SMTP_USER=your-email@gmail.com      # required - your email/username
SMTP_PASS=your-app-password         # required - your password/API key
SMTP_SECURE=false                   # optional - true for port 465, false otherwise
SMTP_FROM=noreply@reintenspark.com  # optional - sender address
SMTP_TO=info@reintenspark.com       # optional - recipient (default: info@reintenspark.com)
```

**📧 All contact form messages will be sent to: `info@reintenspark.com`**

For detailed SMTP setup instructions, see **[SMTP_SETUP_GUIDE.md](SMTP_SETUP_GUIDE.md)**

### Test SMTP Configuration

```bash
npm run test:smtp
```

This will verify your SMTP settings and send a test email to `info@reintenspark.com`.

Restart the dev server after changing env values. Missing variables will surface as a descriptive 500 response from `/api/contact`.

## Contact Form Workflow

- `src/components/forms/ContactForm.tsx` handles client-side validation, progress states, and the POST to `/api/contact`.
- `src/app/api/contact/route.ts` uses Nodemailer to dispatch the email via your SMTP relay. The route runs on the Node.js runtime, so any library that works in plain Node will work here too.

## Deployment

Deploy anywhere you can expose environment variables (Vercel, Netlify, Render, bare metal). Remember to set the same SMTP variables in the hosting dashboard so the contact form continues to work in production.
