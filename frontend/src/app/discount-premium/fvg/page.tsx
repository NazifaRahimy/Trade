import FVGChart from "@/src/components/discount-premium/FVG/FVGChart";
import FVGCard from "@/src/components/discount-premium/FVG/FVGCard";
import FVGList from "@/src/components/discount-premium/FVG/FVGList";
import FVGStatus from "@/src/components/discount-premium/FVG/FVGStatus";
import FVGFilters from "@/src/components/discount-premium/FVG/FVGFilters";

export default function FVGPage() {
  return (
    <div className=" space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Fair Value Gap
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Monitor bullish and bearish fair value gaps across active
            timeframes.
          </p>
        </div>

        <span className="w-fit rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
          MARKET ACTIVE
        </span>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <FVGCard
          title="Active FVGs"
          value="3"
          description="Currently valid"
          valueColor="text-blue-600"
        />

        <FVGCard
          title="Bullish FVG"
          value="2"
          description="Buy-side imbalance"
          valueColor="text-green-600"
        />

        <FVGCard
          title="Bearish FVG"
          value="1"
          description="Sell-side imbalance"
          valueColor="text-red-600"
        />

        <FVGCard
          title="Strongest FVG"
          value="87%"
          description="M1 Bullish"
          valueColor="text-purple-600"
        />
      </div>

      {/* Chart */}
      <FVGChart />

      {/* Status + Filters */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="">
          <FVGStatus />
        </div>

        <FVGFilters />
      </div>

      {/* FVG List */}
      <FVGList />
    </div>
  );
}
