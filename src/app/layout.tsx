import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Arpit Sutariya | Data & ML Engineer",
  description:
    "Portfolio of Arpit Sutariya: data & ML engineer building data pipelines, retrieval systems, and AI agents. Former SWE Intern at Amazon Music, M.S. Applied Data Science at USC.",
  keywords: [
    "Data Engineering",
    "Machine Learning",
    "AI Agents",
    "PySpark",
    "AWS",
    "Portfolio",
    "Arpit Sutariya",
  ],
  openGraph: {
    title: "Arpit Sutariya | Data & ML Engineer",
    description:
      "Data pipelines, retrieval systems, and AI agents you can trust. SWE Intern @ Amazon Music, USC M.S. Applied Data Science.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0ea" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

// Applies a saved theme choice before first paint to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
