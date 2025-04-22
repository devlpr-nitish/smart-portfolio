import type { Metadata } from "next";
import { Bangers, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import { Footer } from "@/components/Fotter";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bangers.variable}`}>
      <body className="bg-[#050505] relative">
        <div className="fixed top-4 left-4 z-50">
          <Link href="/">
            <img src="/nitish.jpeg" alt="Logo" className="h-10 w-auto rounded-full cursor-pointer" />
          </Link>
        </div>

        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#050505]/90 backdrop-blur-md rounded-full shadow-lg border border-white/10">
          <Navbar />
        </nav>


        <main className="px-72">
          {children}
        </main>

        <footer className="px-72">
          <Footer/> 
        </footer>
      </body>
    </html>
  );
}
