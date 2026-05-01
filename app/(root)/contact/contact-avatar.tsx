import HeroAvatar from "@/components/shared/hero/hero-avatar";
import trueMe from "@/public/images/avatars/theo-profile.webp";
import ContactAvatarCaption from "./contact-avatar-caption";

const ContactAvatar = () => {
  return (
    <div className="flex flex-col justify-center items-center col-span-1">
      <HeroAvatar avatar={trueMe} />
      <ContactAvatarCaption />
    </div>
  );
};

export default ContactAvatar;
