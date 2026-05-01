import type { Metadata } from "next";
import Hero from "../../components/shared/hero";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
  twitter: { title: siteName },
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
