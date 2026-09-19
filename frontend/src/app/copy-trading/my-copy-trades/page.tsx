import CopyTradesHeader from "@/src/components/copy-trading/my-copy-trades/CopyTradesHeader";
import CopyTradesStats from "@/src/components/copy-trading/my-copy-trades/CopyTradesStats";
import MyCopyTrader from "@/src/components/copy-trading/my-copy-trades/MyCopyTrader";

export default function MyCopyTradesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className=" space-y-6 p-5 md:p-8 lg:p-10">
        <CopyTradesHeader />

        <CopyTradesStats />

        <MyCopyTrader />
      </div>
    </main>
  );
}
