import type {Metadata} from "next";
import ContactFrom from "@/src/components/contact/ContactForm";
import ContactFaq from "@/src/components/contact/ContactFaq";
import ContactInfo from "@/src/components/contact/ContactInfo";
import ContactHero from "@/src/components/contact/ContactHero";

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactFrom />
      <ContactFaq />
    </div>
  );
};

export default Contact;
