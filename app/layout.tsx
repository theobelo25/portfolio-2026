import type { Metadata } from "next";
import { Press_Start_2P, Play, Questrial } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});
const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: "400",
});
const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "TheoCodes.dev",
  description: "A personal and professional portfolio for Theodore Belo.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`relative ${pressStart2P.variable} ${questrial.variable} ${play.variable} antialiased`}
        >
          <ThemeProvider
            attribute={"class"}
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
