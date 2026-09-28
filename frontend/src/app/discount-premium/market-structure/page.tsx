import StructureChart from "@/src/components/discount-premium/MarketStructure/StructureChar";
import TimeframeSelector from "@/src/components/discount-premium/MarketStructure/TimeframeSelector";
import StructureStatusCard from "@/src/components/discount-premium/MarketStructure/StructureStatusCard";
import SwingPoints from "@/src/components/discount-premium/MarketStructure/SwingPoints";
import StructureHistory from "@/src/components/discount-premium/MarketStructure/StructureHistory";

export default function MarketStructurePage() {
  return (
    <div className=" space-y-6">
      {/* Page Header */}{" "}
      <div>
        {" "}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          {" "}
          <div>
            {" "}
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Market Structure{" "}
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Analyze market direction, structure breaks, swing points and
              timeframe alignment.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

            <span className="text-sm font-medium text-gray-600">
              Market Open
            </span>
          </div>
        </div>
      </div>
      {/* Market Overview */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Symbol</p>
          <p className="mt-2 text-xl font-bold text-gray-900">XAUUSD</p>
          <p className="mt-1 text-xs text-gray-400">Gold / US Dollar</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Current Price</p>
          <p className="mt-2 text-xl font-bold text-gray-900">4334.20</p>
          <p className="mt-1 text-xs font-medium text-green-600">
            +0.42% Today
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Market Regime</p>
          <p className="mt-2 text-xl font-bold text-green-600">TRENDING</p>
          <p className="mt-1 text-xs text-gray-400">Bullish direction</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Timeframe Alignment</p>
          <p className="mt-2 text-xl font-bold text-green-600">CONFIRMED</p>
          <p className="mt-1 text-xs text-gray-400">M5 + M1 aligned</p>
        </div>
      </div>
      {/* Timeframe Selector */}
      <TimeframeSelector />
      {/* Main Structure Chart */}
      <StructureChart />
      {/* Structure Cards */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <StructureStatusCard
          timeframe="M5"
          title="M5 Market Structure"
          trend="BULLISH"
          lastStructure="HH"
          previousStructure="HL"
          structure="BOS"
          strength="Strong"
          confirmation="Primary Direction"
        />

        <StructureStatusCard
          timeframe="M1"
          title="M1 Market Structure"
          trend="BULLISH"
          lastStructure="HH"
          previousStructure="HL"
          structure="BOS"
          strength="Confirmed"
          confirmation="Entry Confirmation"
        />
      </div>
      {/* Swing Points + Structure History */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <SwingPoints />
        <StructureHistory />
      </div>
      {/* Market Analysis */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-gray-900">
            Market Analysis
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Current structure conditions based on the selected market data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
              M5 Direction
            </p>

            <p className="mt-2 text-lg font-bold text-green-700">Bullish</p>

            <p className="mt-1 text-xs text-green-600">
              Higher highs and higher lows
            </p>
          </div>

          <div className="rounded-xl bg-blue-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Structure
            </p>

            <p className="mt-2 text-lg font-bold text-blue-700">BOS</p>

            <p className="mt-1 text-xs text-blue-600">
              Break of structure confirmed
            </p>
          </div>

          <div className="rounded-xl bg-purple-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
              Entry Confirmation
            </p>

            <p className="mt-2 text-lg font-bold text-purple-700">YES</p>

            <p className="mt-1 text-xs text-purple-600">
              M1 structure aligned with M5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
