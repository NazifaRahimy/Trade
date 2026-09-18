"use client";

import OverviewHeader from "@/src/components/copy-trading/overview/OverviewHeader";
import OverviewStats from "@/src/components/copy-trading/overview/OverviewStats";
import PortfolioGrowth from "@/src/components/copy-trading/overview/PortfolioGrowth";
import CopyAllocation from "@/src/components/copy-trading/overview/CopyAllocation";
import ActiveCopyTraders from "@/src/components/copy-trading/overview/ActiveCopyTraders";
export default function CopyTradingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <div className="space-y-6 p-5 lg:p-8">
          {/* Header */}
          <OverviewHeader />

          {/* Stats */}
          <OverviewStats />

          {/* Performance + Allocation */}
          <section className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
            <PortfolioGrowth />
            <CopyAllocation />
          </section>
          <ActiveCopyTraders />
        </div>
      </main>
    </div>
  );
}
