import Header from "@/components/shared/header";
import HeroAvatar from "@/components/shared/hero/hero-avatar";
import { cn } from "@/lib/utils";
import { Mail, Github } from "lucide-react";
import ContactMe from "./contact-me";
import ContactAvatar from "./contact-avatar";

const ContactPage = () => {
  return (
    <main className="wrapper pt-30 pb-40 flex flex-col justify-center min-h-screen">
      <Header className={cn("fixed top-8 left-[50%] -translate-x-[50%]")} />
      <div className="grid grid-cols-2 gap-8 w-full">
        <ContactMe />
        <ContactAvatar />
      </div>
    </main>
  );
};

export default ContactPage;
