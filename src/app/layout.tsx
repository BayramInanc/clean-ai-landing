import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CleanAI - The Smartest Way to Clean Your Gallery",
  description: "Instantly remove duplicates, blur, and clutter. Reclaim gigabytes of storage with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black antialiased selection:bg-[#0066FF]/20`}>
        {children}
      </body>
    </html>
  );
}
