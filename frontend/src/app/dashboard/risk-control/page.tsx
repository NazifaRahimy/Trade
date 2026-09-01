import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Risk Control",
  description: "Manage your trading risk and risk control settings.",
};

const RiskControl = () => {
  return (
    <div>
      <h1>مدیریت ریسک</h1>
      <p>تنظیمات کنترل سرمایه و مدیریت ریسک معاملات.</p>
    </div>
  );
};

export default RiskControl;
