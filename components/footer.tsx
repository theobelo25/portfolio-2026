import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t fixed bottom-0 left-0 z-10 w-full backdrop-blur-3xl">
      <div className="px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] text-center">
        &copy; {currentYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
