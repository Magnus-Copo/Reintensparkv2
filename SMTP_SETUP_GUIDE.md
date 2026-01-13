# SMTP Email Setup Guide for ReInternSpark Contact Form

## 🎯 Current Configuration
All contact form messages are now configured to be sent to: **info@reintenspark.com**

## 📧 SMTP Provider Options

### Option 1: Gmail (Recommended for Quick Setup)

#### Steps:
1. **Enable 2-Factor Authentication** on your Gmail account
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "ReInternSpark Contact Form"
   - Click "Generate"
   - Copy the 16-character password

3. **Update `.env.local`:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-char-app-password
SMTP_SECURE=false
SMTP_FROM=noreply@reintenspark.com
SMTP_TO=info@reintenspark.com
```

**Note:** Gmail allows sending 500 emails per day on free accounts.

---

### Option 2: Microsoft 365 / Outlook

#### Steps:
1. Use your Microsoft 365 business email credentials

2. **Update `.env.local`:**
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
SMTP_SECURE=false
SMTP_FROM=noreply@reintenspark.com
SMTP_TO=info@reintenspark.com
```

---

### Option 3: SendGrid (Professional - 100 emails/day free)

#### Steps:
1. Sign up at https://sendgrid.com
2. Create an API Key:
   - Go to Settings → API Keys
   - Click "Create API Key"
   - Choose "Restricted Access" and enable "Mail Send"
   - Copy the API Key

3. **Update `.env.local`:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
SMTP_SECURE=false
SMTP_FROM=noreply@reintenspark.com
SMTP_TO=info@reintenspark.com
```

---

### Option 4: Mailgun (Professional - 5,000 emails/month free)

#### Steps:
1. Sign up at https://www.mailgun.com
2. Get your SMTP credentials from Dashboard → Sending → Domain Settings

3. **Update `.env.local`:**
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
SMTP_SECURE=false
SMTP_FROM=noreply@reintenspark.com
SMTP_TO=info@reintenspark.com
```

---

### Option 5: Custom Domain Email (cPanel/Plesk)

If you have web hosting with email:

```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@reintenspark.com
SMTP_PASS=your-email-password
SMTP_SECURE=false
SMTP_FROM=noreply@reintenspark.com
SMTP_TO=info@reintenspark.com
```

---

## 🔧 Configuration File Location

Edit the file: `.env.local` in the root directory of the project.

**Current configured recipient:** `info@reintenspark.com`

---

## ✅ Testing the Setup

### 1. Start the development server:
```bash
npm run dev
```

### 2. Check SMTP health status:
Open in browser: http://localhost:3000/api/contact

You should see:
```json
{
  "status": "ok",
  "smtp": {
    "host": "smtp.gmail.com",
    "port": 587,
    "secure": false
  }
}
```

### 3. Test the contact form:
- Go to: http://localhost:3000/contact
- Fill out and submit the form
- Check `info@reintenspark.com` inbox for the message

---

## 🛠️ Features Included

✅ **Recipient Email:** info@reintenspark.com  
✅ **Connection Pooling:** Optimized for performance  
✅ **Retry Logic:** Auto-retry on transient failures (3 attempts)  
✅ **Rate Limiting:** 5 requests per minute per IP  
✅ **Security:** TLS encryption, XSS protection  
✅ **HTML Emails:** Beautiful styled email templates  
✅ **Reply-To:** Emails have reply-to set to sender's email  
✅ **Error Handling:** Graceful error messages  
✅ **Email Validation:** Comprehensive validation  
✅ **Sanitization:** XSS and injection protection  

---

## 🐛 Troubleshooting

### Error: "Email service authentication error"
- **Gmail:** Make sure you're using an App Password, not your account password
- **Other:** Check username and password are correct

### Error: "Email service timed out"
- Check your internet connection
- Some networks block SMTP ports (587, 465)
- Try using a VPN or different network

### Error: "SMTP not configured"
- Make sure `.env.local` file exists in the root directory
- Check that all required variables are set (SMTP_HOST, SMTP_USER, SMTP_PASS)
- Restart the dev server after changing `.env.local`

### Gmail "Less secure app" error
- Gmail no longer supports "less secure apps"
- You MUST use 2FA + App Password (see Option 1 above)

### Emails not arriving at info@reintenspark.com
- Check spam/junk folder
- Verify SMTP_TO is set to: info@reintenspark.com
- Check email provider logs for delivery issues
- Test with health check endpoint: http://localhost:3000/api/contact

---

## 📊 Monitoring

### Health Check Endpoint
```
GET http://localhost:3000/api/contact
```

Returns SMTP connection status and configuration.

### Logs
All email operations are logged to console with:
- Success/failure status
- Message IDs
- Duration
- Error details

---

## 🔒 Security Best Practices

1. **Never commit `.env.local` to Git** (already in `.gitignore`)
2. **Use App Passwords** instead of account passwords
3. **Rotate credentials** regularly
4. **Monitor rate limits** to prevent abuse
5. **Use HTTPS** in production
6. **Enable 2FA** on email provider accounts

---

## 📦 Production Deployment

### Environment Variables (Vercel/Netlify)
Set these in your hosting dashboard:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_SECURE=false
SMTP_FROM=noreply@reintenspark.com
SMTP_TO=info@reintenspark.com
```

### Vercel Example:
1. Go to Project Settings → Environment Variables
2. Add each variable above
3. Redeploy the project

---

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify `.env.local` configuration
3. Test the health check endpoint
4. Check server logs for detailed error messages

---

## 📝 Summary

Your contact form is now configured to:
- ✅ Send all messages to **info@reintenspark.com**
- ✅ Use reliable SMTP with retry logic
- ✅ Include sender's email in reply-to field
- ✅ Provide beautiful HTML email formatting
- ✅ Protect against spam and abuse

**Next Step:** Choose an SMTP provider above and update your `.env.local` file with the credentials.
