import { aboutPageMetadata } from "@/lib/metadata";

export const metadata = aboutPageMetadata;

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
