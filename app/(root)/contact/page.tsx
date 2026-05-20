import ContactMe from "./contact-me";
import ContactAvatar from "./contact-avatar";

const ContactPage = () => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="wrapper flex flex-col gap-8 pt-30 pb-page-footer"
    >
      <div className="grid w-full grid-cols-1 items-start gap-8 md:grid-cols-2">
        <ContactMe />
        <ContactAvatar />
      </div>
    </main>
  );
};

export default ContactPage;
