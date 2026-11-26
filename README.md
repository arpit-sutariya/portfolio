# Arpit Sutariya — Portfolio

A minimal, editorial portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, with light and dark themes.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Instrument Serif, Instrument Sans, Geist Mono (via `next/font`)
- **Deployment:** Vercel

## Getting Started

```bash
# Clone the repo
git clone https://github.com/arpit-sutariya/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

The fastest way to deploy:

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click **Deploy** — that's it!

## Customization

All personal data lives in `src/lib/data.ts`. Edit your:
- Name, bio, and contact info
- Skills and technologies
- Work experience
- Projects (update the `link` fields with your actual GitHub URLs)
- Education

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Theme tokens (light/dark) + base styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page composing all sections
├── components/
│   ├── Navbar.tsx       # Fixed nav with mobile menu
│   ├── Hero.tsx         # Intro, quick facts, key numbers
│   ├── SectionHeader.tsx # Reusable section headers
│   ├── Reveal.tsx       # Layout wrapper
│   ├── Experience.tsx   # Experience rows
│   ├── Projects.tsx     # Project index (agents, data, earlier work)
│   ├── Skills.tsx       # Toolkit
│   ├── Education.tsx    # Education rows
│   └── Contact.tsx      # Contact + footer
└── lib/
    └── data.ts          # All portfolio content
```

## License

MIT
