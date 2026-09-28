import PremiumDiscountChart from "@/src/components/discount-premium/PremiumDiscount/PremiumDiscountChart";
import PremiumZone from "@/src/components/discount-premium/PremiumDiscount/PremiumZone";
import DiscountZone from "@/src/components/discount-premium/PremiumDiscount/DiscountZone";
import EquilibriumLine from "@/src/components/discount-premium/PremiumDiscount/EquilibriumLine";
import ZoneInfoCard from "@/src/components/discount-premium/PremiumDiscount/DiscountZone";

export default function PremiumDiscountPage() {
  return (
    <div className=" space-y-6">
      {/* Page Header */}{" "}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        {" "}
        <div>
          {" "}
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Premium / Discount{" "}
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Analyze the current price position between the latest swing high and
            swing low.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

          <span className="text-xs font-semibold text-green-700">
            DISCOUNT ZONE
          </span>
        </div>
      </div>
      {/* Market Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Symbol</p>

          <p className="mt-2 text-xl font-bold text-gray-900">XAUUSD</p>

          <p className="mt-1 text-xs text-gray-400">Gold / US Dollar</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Current Price</p>

          <p className="mt-2 text-xl font-bold text-gray-900">4325.00</p>

          <p className="mt-1 text-xs font-medium text-green-600">
            Inside Discount
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Equilibrium</p>

          <p className="mt-2 text-xl font-bold text-gray-900">4328.00</p>

          <p className="mt-1 text-xs text-gray-400">50% of current range</p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Current Zone</p>

          <p className="mt-2 text-xl font-bold text-green-600">DISCOUNT</p>

          <p className="mt-1 text-xs text-gray-400">Buy-side area</p>
        </div>
      </div>
      {/* Main Chart */}
      <PremiumDiscountChart />
      {/* Zone Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <PremiumZone />
        <EquilibriumLine />
        <DiscountZone />
      </div>
      {/* Zone Information */}
      <ZoneInfoCard />
      {/* Trading Interpretation */}
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-gray-900">Zone Analysis</h2>

          <p className="mt-1 text-sm text-gray-500">
            Current price position and its relationship with the market range.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
              Current Zone
            </p>

            <p className="mt-2 text-lg font-bold text-green-700">DISCOUNT</p>

            <p className="mt-1 text-xs text-green-600">
              Price is below the 50% equilibrium level.
            </p>
          </div>

          <div className="rounded-xl bg-blue-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
              Market Range
            </p>

            <p className="mt-2 text-lg font-bold text-blue-700">44.00</p>

            <p className="mt-1 text-xs text-blue-600">
              Swing High minus Swing Low.
            </p>
          </div>

          <div className="rounded-xl bg-purple-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
              Position
            </p>

            <p className="mt-2 text-lg font-bold text-purple-700">43.2%</p>

            <p className="mt-1 text-xs text-purple-600">
              Current price position within the range.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
