import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | TheoCodes.dev",
  description: `Reach ${APP_NAME} by email, GitHub, and LinkedIn, or download a CV.`,
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
