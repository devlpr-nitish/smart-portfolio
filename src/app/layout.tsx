import type { Metadata } from "next";
import { Bangers, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "@/components/Fotter";
import { CommandSearch } from "@/components/CommandSearch";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bangers',
});

export const metadata: Metadata = {
  title: "Nitish",
  description: "Showcasing projects, skills, and developer journey",
  openGraph:{
    images:"nitish.jpeg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bangers.variable}`}>
      <body className="bg-[#050505] relative">

        <div className="fixed md:top-4 md:left-72 top-4 left-4 z-50">
          <img src="/nitish.jpeg" alt="Logo" className="h-10 w-auto rounded-full" />
        </div>

        <div className="fixed z-20 md:top-4 md:right-72 top-5 right-4">
          <CommandSearch />
        </div>

        <nav className="fixed md:bottom-4 md:right-84 bottom-5 -right-40 transform -translate-x-1/2 z-50 bg-[#050505]/90 backdrop-blur-md rounded-full shadow-lg border border-white/10">
          <Navbar />
        </nav>

        <main className="md:px-72 px-4">
          {children}
        </main>
        <Toaster />

        <footer className="md:px-72 px-4">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
