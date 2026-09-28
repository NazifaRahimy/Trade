import MarketSummary from "@/src/components/discount-premium/Overview/MarketSummary";
import StructureStatus from "@/src/components/discount-premium/Overview/StructureStatus";
import CurrentZone from "@/src/components/discount-premium/Overview/CurrentZone";
import FVGStatus from "@/src/components/discount-premium/Overview/FVGStatus";
import CurrentSetup from "@/src/components/discount-premium/Overview/CurrentSetup";
import TradingChart from "@/src/components/discount-premium/Overview/TradingChart";

export default function DiscountPremiumOverviewPage() {
  return (
    <div className=" space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Trading Overview
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Market structure, premium/discount, FVG and current trading setup.
        </p>
      </div>

      {/* Account Summary */}
      <MarketSummary />

      {/* Trading Chart */}
      <TradingChart />

      {/* Structure + Setup */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <StructureStatus />
        <CurrentSetup />
      </div>

      {/* Zone + FVG */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <CurrentZone />
        <FVGStatus />
      </div>
    </div>
  );
}
