import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaForge Digital | Web Development Services",
  description:
    "Full-service web development agency specializing in high-performing websites, modern web apps, and tailored digital experiences.",
  metadataBase: new URL("https://agentic-fb35fb8a.vercel.app"),
  openGraph: {
    title: "NovaForge Digital | Web Development Services",
    description:
      "Full-service web development agency specializing in high-performing websites, modern web apps, and tailored digital experiences.",
    url: "https://agentic-fb35fb8a.vercel.app",
    siteName: "NovaForge Digital",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Developers collaborating in a modern workspace"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaForge Digital | Web Development Services",
    description:
      "Full-service web development agency specializing in high-performing websites, modern web apps, and tailored digital experiences."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
