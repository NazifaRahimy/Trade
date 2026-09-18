import PerformanceHeader from "@/src/components/copy-trading/performance/PerformanceHeader";
import PerformanceStats from "@/src/components/copy-trading/performance/PerformanceStats";
import PerformanceChart from "@/src/components/copy-trading/performance/PerformanceChart";
import ProfitLossOverview from "@/src/components/copy-trading/performance/ProfitLossOverview";
import PerformanceBreakdown from "@/src/components/copy-trading/performance/PerformanceBreakdown";
import DailyPerformance from "@/src/components/copy-trading/performance/DailyPerformance";
export default function PerformancePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-[1400px] space-y-6 p-5 md:p-8 lg:p-10">
        <PerformanceHeader />

        <PerformanceStats />

        <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <PerformanceChart />
          <ProfitLossOverview />
        </section>

        <PerformanceBreakdown />
        <DailyPerformance />
      </div>
    </main>
  );
}
