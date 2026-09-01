import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Trade History",
  description: "View your trading history and previous transactions.",
};

const TradeHistory = () => {
  return (
    <div>
      <h1>تاریخچه معاملات</h1>
      <p>سوابق و نتایج معاملات گذشته خود را مشاهده کنید.</p>
    </div>
  );
};

export default TradeHistory;
