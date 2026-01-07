# Maikona

A modern, responsive portfolio website built with Next.js 15 and deployed on Cloudflare Pages.

## 🚀 Live Site

- **Production:** [maikona.com](https://maikona.com)
- **Staging:** [maikona.dev](https://maikona.dev)

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Cloudflare Pages
- **CI/CD:** GitHub Actions

## ✨ Features

- ⚡ Static site generation for optimal performance
- 🎨 Responsive design with Tailwind CSS
- 📱 Mobile-first approach
- 🔒 Automatic HTTPS with Cloudflare
- 🌍 Global CDN distribution
- ✅ Automated quality checks (ESLint, TypeScript)

## 📋 Prerequisites

- Node.js 20.x or later
- npm or yarn

## 🏃 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/maikona.git
cd maikona

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building

```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

## 📁 Project Structure

```
maikona/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── Navigation.tsx     # Site navigation
├── lib/                   # Utility functions
│   └── config.ts          # Environment configuration
├── public/                # Static assets
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Available variables:

- `NEXT_PUBLIC_ENVIRONMENT` - Environment name (development/staging/production)
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email address
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)

## 🚢 Deployment

This project uses Cloudflare Pages for deployment with automatic builds.

### Deployment Flow

```
Push to main → GitHub Actions (quality checks) → Cloudflare Pages → Live
```

### Automatic Deployments

- **Production:** Commits to `main` branch deploy to [maikona.com](https://maikona.com)
- **Preview:** Feature branches get automatic preview URLs

### Manual Deployment

You can also manually trigger deployments via the Cloudflare Pages dashboard.

## 🧪 Quality Assurance

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

### Pre-commit Checks

GitHub Actions automatically runs quality checks on every push:
- ESLint validation
- TypeScript type checking
- Build verification

## 📝 Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write code
   - Test locally with `npm run dev`
   - Ensure quality checks pass with `npm run lint`

3. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Open a Pull Request on GitHub
   - Review changes and merge when ready

4. **Deploy to production**
   - Merge PR to `main` branch
   - Cloudflare automatically deploys to production

## 🤝 Contributing

This is a personal project, but suggestions and bug reports are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Note:** While the code is open source, "Maikona" is a trademark. You may use the code, but please do not use the "Maikona" name or branding for your own projects.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com/)
- Font: [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk)

## 📧 Contact

- **Website:** [maikona.com](https://maikona.com)
- **Email:** contact@maikona.com

---

Built with ❤️ using Next.js and Cloudflare Pages

**"Maikona"™ is a trademark. The code is open source (MIT), but please use your own branding.**