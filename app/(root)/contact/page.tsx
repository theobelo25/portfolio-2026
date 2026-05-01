import type { Metadata } from "next";
import Header from "@/components/shared/header";
import { cn } from "@/lib/utils";
import ContactMe from "./contact-me";
import ContactAvatar from "./contact-avatar";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Theodore Belo — portfolio and work inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact",
    description: "Get in touch with Theodore Belo — portfolio and work inquiries.",
  },
  twitter: { title: "Contact" },
};

const ContactPage = () => {
  return (
    <main className="wrapper pt-30 pb-40 flex flex-col justify-center min-h-screen">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ContactMe />
        <ContactAvatar />
      </div>
    </main>
  );
};

export default ContactPage;
