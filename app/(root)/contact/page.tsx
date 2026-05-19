import ContactMe from "./contact-me";
import ContactAvatar from "./contact-avatar";

const ContactPage = () => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="wrapper pt-30 pb-page-footer-lg flex flex-col justify-center min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <ContactMe />
        <ContactAvatar />
      </div>
    </main>
  );
};

export default ContactPage;
