# Netlify Deployment Guide for Reinternspark

## Prerequisites
- Netlify account (free tier is sufficient)
- Git repository connected to Netlify

## Deployment Steps

### 1. Connect to Netlify
1. Go to https://app.netlify.com/
2. Click "Add new site" > "Import an existing project"
3. Choose your Git provider and select the repository
4. Branch: `chore/network-dev-access` (or your main branch)

### 2. Build Settings (Auto-configured via netlify.toml)
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 20

### 3. Environment Variables
Add these in Netlify Dashboard > Site settings > Environment variables:

```
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
SMTP_FROM=noreply@reintenspark.com
SMTP_TO=info@reintenspark.com
NODE_ENV=production
```

### 4. Deploy
- Click "Deploy site"
- Netlify will automatically build and deploy your site
- You'll get a random URL like `https://random-name.netlify.app`

### 5. Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Add custom domain: `reintenspark.com`
3. Update DNS settings as instructed by Netlify
4. Enable HTTPS (automatic with Netlify)

## Features Enabled
✅ Next.js App Router support
✅ Server-side rendering (SSR)
✅ API routes (/api/contact)
✅ Static page generation (SSG)
✅ Image optimization
✅ Security headers
✅ Asset caching
✅ Automatic HTTPS

## Post-Deployment Checklist
- [ ] Test contact form functionality
- [ ] Verify all pages load correctly
- [ ] Check image optimization
- [ ] Test navigation and routing
- [ ] Verify social media links
- [ ] Test responsive design on mobile
- [ ] Check Core Web Vitals in Lighthouse

## Troubleshooting

### Build fails with Node.js error
- Check that Node version is set to 20 in build settings

### Contact form not working
- Verify SMTP environment variables are set correctly
- Check Netlify function logs for errors

### Images not loading
- Ensure `public` folder images are committed to Git
- Check image paths are correct (case-sensitive)

### 404 on page refresh
- This should be handled by netlify.toml redirects
- If issues persist, check the redirects section

## Support
For issues, check:
- Netlify build logs
- Browser console for errors
- Netlify function logs for API issues
