import type { Metadata } from "next";
import { Nunito, MuseoModerno } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { menuItems } from "@/constants";
import FloatingNavbar from "@/components/floating-navbar";

const nunito = Nunito({ subsets: ["latin"] });
const museo = MuseoModerno({ subsets: ["latin"], variable: '--font-museo' });

export const metadata: Metadata = {
  title: "Akbar Portfolio",
  description: "Akbar's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar" suppressHydrationWarning={false}>
      <body className={cn(nunito.className, museo.variable)}>
        <Navbar navItems={menuItems} />
        <FloatingNavbar navItems={menuItems} className="hidden md:flex" />
        <main className="static md:absolute left-0 top-0 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
