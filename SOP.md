# Standard Operating Procedure (SOP)
## Reinternspark Marketing Site

**Date:** January 13, 2026
**Version:** 1.0
**Author:** Reinternspark Team

---

## 1. Project Overview

This SOP documents the technical stack, development workflow, and deployment procedures for the **Reinternspark Marketing Site**. The website serves as a portfolio to showcase courses, labs, and R&D practice areas. It features a responsive design, animations, and a fully functional SMTP-backed contact form.

### Key Features
*   Modern, high-performance UI using Next.js 16.
*   Responsive and accessible design with Tailwind CSS 4.
*   Dynamic page transitions and scroll animations via Framer Motion.
*   Secure server-side email handling using Nodemailer.
*   Optimized for SEO and performance.

---

## 2. Tools & Technologies

The following tools and technologies were used in the creation of this project:

### Core Framework & Language
*   **Next.js 16.0.10**: React framework for production. Used for routing, API routes, and optimization.
*   **React 19.2.1**: UI library for building component-based interfaces.
*   **TypeScript 5**: Static typing for improved code quality and developer experience.
*   **Node.js**: Runtime environment (Requires v20+).

### Styling & UI
*   **Tailwind CSS 4**: Utility-first CSS framework for rapid UI development.
*   **Framer Motion 12.26.1**: Animation library for complex gestures and transitions.
*   **PostCSS**: Tool for transforming CSS with JavaScript.

### Backend & API
*   **Nodemailer 6.9.16**: Module for sending emails from Node.js applications.
*   **Dotenv**: Zero-dependency module for loading environment variables.
*   **API Routes**: Next.js App Router API handlers (in `src/app/api`).

### Development Tools
*   **ESLint 9**: Pluggable code analysis tool for identifying patterns in JavaScript.
*   **Git**: Version control system.
*   **npm / pnpm**: Package managers.

---

## 3. Project Structure

The project follows the standard Next.js App Router structure:

```
reinternspark-site/
├── .env.local              # Local environment variables (git-ignored)
├── .github/                # GitHub specific configurations
├── public/                 # Static assets (images, logos, favicon)
├── src/
│   ├── app/                # App Router: Pages and API routes
│   │   ├── api/            # Backend API endpoints (e.g., contact form)
│   │   ├── careers/        # Careers page
│   │   ├── contact/        # Contact page
│   │   ├── courses/        # Courses page
│   │   ├── hardware/       # Hardware projects page
│   │   ├── projects/       # General projects page
│   │   ├── rd/             # R&D page
│   │   ├── software-iot/   # Software & IoT page
│   │   ├── globals.css     # Global styles & Tailwind directives
│   │   ├── layout.tsx      # Root layout (navbar, footer, fonts)
│   │   └── page.tsx        # Home page
│   │
│   ├── components/         # Reusable UI components
│   │   ├── forms/          # Form components (ContactForm)
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── sections/       # Page sections (Hero, Features)
│   │   └── ui/             # Generic UI elements (Buttons, Cards)
│   │
│   └── lib/                # Utility functions and shared logic
│
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

---

## 4. Work Environment Setup

### Prerequisites
Ensure the following are installed on your development machine:
1.  **Node.js**: Version 20.x or higher.
2.  **Git**: Latest version.
3.  **Code Editor**: Visual Studio Code (recommended) with ES7/React/Redux snippets and Tailwind CSS IntelliSense extensions.

### Installation Steps

1.  **Clone the Repository**
    ```bash
    git clone <repository_url>
    cd reinternspark-site
    ```

2.  **Install Dependencies**
    Use `npm` or `pnpm` to install all required packages.
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Environment Configuration**
    Create a `.env.local` file in the root directory. This file is **critical** for the contact form to work.
    
    *Reference `env.example` for the template.*

    **Required Variables:**
    ```env
    SMTP_HOST=smtp.gmail.com            # Your SMTP server
    SMTP_PORT=587                       # Port (usually 587 or 465)
    SMTP_USER=your-email@gmail.com      # SMTP Username
    SMTP_PASS=your-app-password         # SMTP Password
    SMTP_SECURE=false                   # true for 465, false for other ports
    SMTP_FROM=noreply@reintenspark.com  # Sender address
    SMTP_TO=info@reintenspark.com       # Recipient address
    ```

---

## 5. Development Workflow

### Running Locally
To start the development server with hot-reloading:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### detailed SMTP Testing
To verify email configuration without submitting the form manually:

```bash
npm run test:smtp
```
This script tries to connect to the SMTP server and sends a test email to the configured `SMTP_TO` address.

### Building for Production
To create an optimized production build:

```bash
npm run build
```
This command compiles the application into the `.next` folder.

### Starting Production Server
To run the built application locally (to simulate production):

```bash
npm start
```

---

## 6. Deployment Procedure

The application is designed to be deployed on platforms like **Vercel**, **Netlify**, or any Node.js hosting.

### Vercel Deployment (Recommended)
1.  Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2.  Import the project in Vercel.
3.  Vercel will automatically detect Next.js.
4.  **Crucial**: Go to **Settings > Environment Variables** and add all the keys from your `.env.local` file (`SMTP_HOST`, `SMTP_USER`, etc.).
5.  Click **Deploy**.

### Manual Deployment
1.  Run `npm run build`.
2.  Upload the contents of the project to your server.
3.  Install dependencies with `npm install --production`.
4.  Start the server with `npm start` (use a process manager like PM2 for persistence).

---

## 7. Troubleshooting & Common Issues

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **Contact Form Error** | Missing Environment Variables | Check `.env.local` exists and has valid SMTP credentials. |
| **Email Not Sent** | SMTP Authentication Failed | Verify `SMTP_PASS` is correct. For Gmail, generate a new "App Password". |
| **Styles Missing** | Tailwind not building | Ensure `@tailwindcss/postcss` is installed and `postcss.config.mjs` is present. |
| **Build Fails** | TypeScript Errors | Run `npx tsc --noEmit` to check for type errors before building. |

---

## 8. Maintenance

*   **Regular Updates**: Run `npm update` periodically to keep dependencies secure.
*   **Monitoring**: Check Vercel/Server logs for failed API requests, especially for the `/api/contact` endpoint.
*   **Content Updates**: Most content is hardcoded in `src/app` or `src/components`. Update the respective `.tsx` files to change text or images.

