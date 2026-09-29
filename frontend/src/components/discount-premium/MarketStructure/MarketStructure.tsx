import StructureChart from "../MarketStructure/StructureChar";
import StructureStatusCard from "../MarketStructure/StructureStatusCard";

export default function MarketStructure() {
  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xl:col-span-2">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-gray-900">
            XAUUSD Market Structure
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Current structural condition of the gold market
          </p>
        </div>

        <StructureChart />
      </div>

      <div className="space-y-4">
        <StructureStatusCard
          timeframe="M5"
          trend="BULLISH"
          structure="BOS"
          lastStructure="HH"
          previousStructure="HL"
          strength="Strong"
          confirmation="Primary Direction"
        />

        <StructureStatusCard
          timeframe="M1"
          trend="BULLISH"
          structure="BOS"
          lastStructure="HH"
          previousStructure="HL"
          strength="Confirmed"
          confirmation="Entry Confirmation"
        />
      </div>
    </section>
  );
}
