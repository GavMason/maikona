# Maikona

Modern Next.js 15 demo landing page with TypeScript and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Hanken Grotesk (Google Fonts)
- **Deployment**: Cloudflare Pages (static export)

## Project Structure

```
maikona/
├── app/
│   ├── globals.css          # Global styles + Tailwind
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page
├── components/
│   └── Navigation.tsx        # Sticky nav with mobile menu
├── public/                   # Static assets (images, favicon, etc.)
├── lib/                      # Utility functions (future)
├── next.config.ts            # Next.js config (static export)
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```