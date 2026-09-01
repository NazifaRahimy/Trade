import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Broker Form",
  description: "Manage and update your broker account information.",
};

const BrokerForm = () => {
  return (
    <div>
      <h1>فرم بروکر</h1>
      <p>اطلاعات حساب بروکر خود را ثبت و مدیریت کنید.</p>
    </div>
  );
};

export default BrokerForm;
