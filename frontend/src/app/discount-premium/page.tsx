"use client";

import OverviewHeader from "@/src/components/discount-premium/Overview/verviewHeader";
import OverviewStats from "@/src/components/discount-premium/Overview/OverviewStats";
import MarketSnapshot from "@/src/components/discount-premium/Overview/MarketSnapshot";
import StrategySnapshot from "@/src/components/discount-premium/Overview/StrategySnapshot";
import SignalsSnapshot from "@/src/components/discount-premium/Overview/SignalsSnapshot";
import TradesSnapshot from "@/src/components/discount-premium/Overview/TradesSnapshot";
import RecentActivity from "@/src/components/discount-premium/Overview/RecentActivity";

export default function DiscountPremiumOverview() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-0">
      <div className="mx-auto max-w-7xl space-y-6">
        <OverviewHeader />

        <OverviewStats />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <MarketSnapshot />
          <StrategySnapshot />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <SignalsSnapshot />
          <TradesSnapshot />
        </div>

        <RecentActivity />
      </div>
    </div>
  );
}
