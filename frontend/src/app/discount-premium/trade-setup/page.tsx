import SetupChart from "@/src/components/discount-premium/TradeSetup/SetupChart";
import SetupSummary from "@/src/components/discount-premium/TradeSetup/SetupSummary";
import EntryZone from "@/src/components/discount-premium/TradeSetup/EntryZone";
import TradeDirection from "@/src/components/discount-premium/TradeSetup/TradeDirection";
import SetupConditions from "@/src/components/discount-premium/TradeSetup/SetupConditions";
import PreviousHigh from "@/src/components/discount-premium/TradeSetup/PreviousHigh";
import PreviousLow from "@/src/components/discount-premium/TradeSetup/PreviousLow";
export default function TradeSetupPage() {
  return (
    <div className=" space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Trade Setup
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Current strategy setup, entry zone, risk and confirmation
            conditions.
          </p>
        </div>

        <span className="w-fit rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
          SETUP VALID
        </span>
      </div>

      {/* Strategy Summary */}
      <SetupSummary />

      {/* Direction + Entry */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <TradeDirection />
        </div>

        <EntryZone />
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <PreviousHigh />
        <PreviousLow />
      </div>
      {/* Chart */}
      <SetupChart />

      {/* Conditions */}
      <SetupConditions />
    </div>
  );
}
