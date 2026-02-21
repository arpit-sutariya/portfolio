import type { Metadata } from "next";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "<i>Arpit Sutariya</i> — Data Scientist & ML Engineer",
  description:
    "Portfolio of <i>Arpit Sutariya</i> — Data Scientist, ML Engineer, and AI builder. USC Applied Data Science graduate.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "AI",
    "Portfolio",
    "Arpit Sutariya",
  ],
  openGraph: {
    title: "Arpit Sutariya — Data Scientist & ML Engineer",
    description:
      "Turning raw data into decisions. Building predictive models, AI agents, and analytics systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
