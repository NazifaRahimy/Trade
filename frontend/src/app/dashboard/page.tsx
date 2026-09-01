import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your trading account from the Trade-platform dashboard.",
};

const Dashboard = () => {
  return (
    <div>
      <h1>داشبورد کاربری</h1>
      <p>مدیریت حساب، اشتراک و اطلاعات شخصی شما.</p>
    </div>
  );
};

export default Dashboard;
