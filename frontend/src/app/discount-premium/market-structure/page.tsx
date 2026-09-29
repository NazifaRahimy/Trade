import MarketHeader from "@/src/components/discount-premium/MarketStructure/MarketHeader";
import MarketRadar from "@/src/components/discount-premium/MarketStructure/MarketRadar";
import MarketTimeframe from "@/src/components/discount-premium/MarketStructure/MarketTimeframe";
import MarketStructure from "@/src/components/discount-premium/MarketStructure/MarketStructure";
import MarketActivity from "@/src/components/discount-premium/MarketStructure/MarketActivity";

export default function MarketPage() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-0">
      <div className=" space-y-6">
        <MarketHeader />

        <MarketRadar />

        <MarketTimeframe />

        <MarketStructure />

        <MarketActivity />
      </div>
    </div>
  );
}
