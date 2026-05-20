"use client";

import HeroAvatar from "@/components/shared/hero/hero-avatar";
import trueMe from "@/public/images/avatars/theo-profile.webp";

import ContactAvatarCaption from "./contact-avatar-caption";
import ContactAvatarMotion from "./contact-avatar-motion";

const ContactAvatar = () => {
  return (
    <ContactAvatarMotion>
      <HeroAvatar
        avatar={trueMe}
        className="mx-auto w-full max-w-[300px] basis-auto md:mx-0"
      />
      <ContactAvatarCaption />
    </ContactAvatarMotion>
  );
};

export default ContactAvatar;
