import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Subscription",
  description: "Manage your Trade-platform subscription and account plan.",
};

const Subscription = () => {
  return (
    <div>
      <h1>اشتراک</h1>
      <p>وضعیت اشتراک و پلن فعال خود را مدیریت کنید.</p>
    </div>
  );
};

export default Subscription;
