import type { Metadata } from "next";
import { Inter, Dancing_Script, Bebas_Neue, Fraunces } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/ui/SplashScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rithikamandiv.me"),
  title: "Rithika Mandiv | Software Engineer",
  description:
    "Portfolio of Rithika Mandiv, a Software Engineering undergraduate building web, desktop and data-driven applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable} ${bebasNeue.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
