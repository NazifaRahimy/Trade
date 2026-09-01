import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Account Status",
  description: "View your trading account status and account information.",
};

const AccountStatus = () => {
  return (
    <div>
      <h1>وضعیت حساب</h1>
      <p>اطلاعات و وضعیت فعلی حساب متصل خود را مشاهده کنید.</p>
    </div>
  );
};

export default AccountStatus;
