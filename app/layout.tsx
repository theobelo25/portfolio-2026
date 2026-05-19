import type { Metadata, Viewport } from "next";
import { Press_Start_2P, Play, Questrial } from "next/font/google";
import "./globals.css";
import PersonProfileJsonLd from "@/components/seo/person-profile-json-ld";
import { createBaseMetadata } from "@/lib/metadata";
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

export const metadata: Metadata = createBaseMetadata();

/** Lets `env(safe-area-inset-bottom)` reflect the home indicator on notched devices. */
export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
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
            <a
              href="#main-content"
              className="fixed left-4 top-0 z-[200] -translate-y-full rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-md transition-transform focus:translate-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Skip to main content
            </a>
            <PersonProfileJsonLd />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
