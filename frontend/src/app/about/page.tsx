import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Trade-platform and our services.",
};

const About = () => {
  return (
    <div>
      <h1>درباره ما</h1>
      <p>
        آکادمی مالی امیری با هدف آموزش و توسعه مهارت‌های معامله‌گری فعالیت
        می‌کند.
      </p>
    </div>
  );
};

export default About;
