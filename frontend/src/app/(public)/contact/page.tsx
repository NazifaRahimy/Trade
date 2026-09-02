import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Trade-platform support or send us your feedback.",
};

const Contact = () => {
  return (
    <div>
      <h1>تماس با ما</h1>
      <p>
        برای دریافت اطلاعات بیشتر و ارتباط با تیم پشتیبانی با ما در تماس باشید.
      </p>
    </div>
  );
};

export default Contact;
