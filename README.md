# Shiv Krishna Engineers (SKE) - Corporate Website

A complete, multi-page, premium light-theme corporate website built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📝 How to Edit Content

All business data (name, address, phones, email, nav, services, stats) is centralized in a single configuration file. 
To update content, edit:
👉 `lib/site-config.ts`

To update image paths, edit:
👉 `lib/images.ts`

## ✅ TODOs for the Site Owner

Before going live, please complete the following:
1. **Confirm Phone Number:** Confirm the proprietor's mobile number (`9508084532` or `9408084532`) in `lib/site-config.ts`.
2. **Client Logos:** Add real client logo images to `/public/clients/` and update the `clients` array in `lib/site-config.ts`.
3. **Project Photos:** Replace placeholder Pexels images in `/public/images/` with real project photos and update `lib/images.ts`.
4. **Email Provider:** Configure a real email provider (e.g., Resend, SendGrid) in `app/api/contact/route.ts` so the contact form works in production.
5. **Partner Name:** Confirm the featured partner name on the Clients page and provide their logo.
6. **WhatsApp Number:** Ensure the WhatsApp number in `lib/site-config.ts` is correct for the floating button.
