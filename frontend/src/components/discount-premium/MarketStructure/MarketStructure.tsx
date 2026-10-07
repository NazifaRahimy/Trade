import StructureChart from "../MarketStructure/StructureChar";
import StructureStatusCard from "../MarketStructure/StructureStatusCard";

export default function MarketStructure({ data }: { data: any }) {
  const structure = data?.structure || {};

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

        <StructureChart data={data} />
      </div>

      <div className="space-y-4">
        <StructureStatusCard
          title="M5 Primary Structure"
          timeframe="M5"
          trend={
            structure?.timeframe === "M5"
              ? structure.trend
              : "BULLISH"
          }
          structure="BOS"
          lastStructure={
            structure?.timeframe === "M5" && structure.last_high
              ? floatFix(structure.last_high)
              : "HH"
          }
          previousStructure={
            structure?.timeframe === "M5" && structure.last_low
              ? floatFix(structure.last_low)
              : "HL"
          }
          strength="Strong"
          confirmation="Primary Direction"
        />

        <StructureStatusCard
          title="M1 Entry Structure"
          timeframe="M1"
          trend={
            structure?.timeframe === "M1"
              ? structure.trend
              : "BULLISH"
          }
          structure="BOS"
          lastStructure={
            structure?.timeframe === "M1" && structure.last_high
              ? floatFix(structure.last_high)
              : "HH"
          }
          previousStructure={
            structure?.timeframe === "M1" && structure.last_low
              ? floatFix(structure.last_low)
              : "HL"
          }
          strength="Confirmed"
          confirmation="Entry Confirmation"
        />
      </div>
    </section>
  );
}

function floatFix(val: string | number) {
  return parseFloat(val.toString()).toFixed(2);
}