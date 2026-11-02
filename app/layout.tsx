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

const title = "Rithika Mandiv | Software Engineer";
const description =
  "Portfolio of Rithika Mandiv, a Software Engineering undergraduate building web, desktop and data-driven applications.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rithikamandiv.me"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Rithika Mandiv",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
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
