import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import {AnimatedBackground} from "@/components/AnimatedBackground";
import {Navigation} from "@/components/Navigation";
import {Footer} from "@/components/Footer";
import {SystemMessage} from "@/components/SystemMessage";
import {generateConstellationMessage} from "@/lib/generate-constelation-message";

const inter = Inter({ subsets: ["latin"] });
const jetBrains = JetBrains_Mono({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akbar's Porffolio Website",
  description: "Read to the star stream and become a constellation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetBrains.className} ${spaceGrotesk.className}`}>
      <div className="min-h-screen text-foreground">
        <AnimatedBackground />
        <Navigation />

        {children}

        <Footer />

        {/* System Message Toast */}
        <SystemMessage
          message={generateConstellationMessage()}
          type="info"
          delay={4000}
        />
      </div>
      </body>
    </html>
  );
}
