import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from "../lib/utils";
import NavBar from "@/components/NavBar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizmify",
  description: "Fullstack Next.js app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased min-h-screen pt-16")}
        suppressHydrationWarning={true}
      >
        <Providers>
          <NavBar />
        </Providers>
        {children}
      </body>
    </html>
  );
}
