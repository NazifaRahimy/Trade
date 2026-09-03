import TradeHistoryHeader from "@/src/components/dashboard/trade-history/TradeHistoryHeader";
import TradeStats from "@/src/components/dashboard/trade-history/TradeStats";
import TradeFilters from "@/src/components/dashboard/trade-history/TradeFilters";
import TradeTable from "@/src/components/dashboard/trade-history/TradeTable";

export default function TradeHistoryPage() {
  return (
    <main className="min-h-screen text-black">
      <div className="mx-auto max-w-[1400px] px-5 py-7 md:px-8 lg:px-10">
        <TradeHistoryHeader />

        <TradeStats />

        <section>
          <TradeFilters />
          <TradeTable />
        </section>
      </div>
    </main>
  );
}
