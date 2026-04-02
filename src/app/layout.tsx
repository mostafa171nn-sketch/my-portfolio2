import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./output.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: "400"
 });

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: "400"
 });

export const metadata: Metadata = {
  title: "Mostafa Omar - Professional Web Developer Portfolio",
  description: "Front-end developer specializing in React, Next.js, Tailwind. Building clean, interactive websites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
      <body className="bg-background text-primary min-h-screen overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}

