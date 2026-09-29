import StrategyHeader from "@/src/components/discount-premium/Strategy/StrategyHeader";
import StrategyOverview from "@/src/components/discount-premium/Strategy/StrategyOverview";
import TradingChart from "@/src/components/discount-premium/Strategy/TradingChart";
import PremiumDiscount from "@/src/components/discount-premium/Strategy/PremiumDiscount";
import FVGOverlay from "@/src/components/discount-premium/Strategy/FVGOverlay";
import TradeSetup from "@/src/components/discount-premium/Strategy/TradeSetup";
import RiskSummary from "@/src/components/discount-premium/Strategy/RiskSummary";
import StrategyConditions from "@/src/components/discount-premium/Strategy/StrategyConditions";

export default function StrategyPage() {
  return (
    <div className="min-h-screen">
      <StrategyHeader />

      <StrategyOverview />

      {/* Main ICT Trading Chart */}
      <section className="mb-6">
        <TradingChart />
      </section>

      {/* Premium / Discount + FVG */}
      <section className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <PremiumDiscount />
        <FVGOverlay />
      </section>

      {/* Current Setup */}
      <section className="mb-6">
        <TradeSetup />
      </section>

      {/* Risk + Conditions */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <RiskSummary />
        <StrategyConditions />
      </section>
    </div>
  );
}
