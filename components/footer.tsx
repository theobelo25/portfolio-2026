import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t fixed bottom-0 left-0 w-full backdrop-blur-3xl">
      <div className="p-2 text-center">
        &copy; {currentYear} {APP_NAME}. All Rights Reserverd
      </div>
    </footer>
  );
};

export default Footer;
