import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Productivity App",
  description: "This is a productivity app where you can measure your productivity by journalling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Header />
            <div className="flex">
              <div className="px-1 pt-2"> <Sidebar /> </div>
              <div className="min-h-screen flex-1 bg-gray-100">
                {children}
              </div>
            </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
