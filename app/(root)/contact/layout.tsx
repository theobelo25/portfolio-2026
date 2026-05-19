import ContactPageJsonLd from "@/components/seo/contact-page-json-ld";
import { contactPageMetadata } from "@/lib/metadata";

export const metadata = contactPageMetadata;

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ContactPageJsonLd />
      {children}
    </>
  );
}
