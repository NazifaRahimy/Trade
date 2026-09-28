export default function ZoneInfoCard() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {" "}
      <div className="mb-5">
        {" "}
        <h2 className="text-lg font-semibold text-gray-900">
          Current Zone Information{" "}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Detailed information about the current Premium / Discount range.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Swing High</p>

          <p className="mt-2 text-xl font-bold text-gray-900">4350.00</p>

          <p className="mt-1 text-xs text-gray-400">Latest M5 swing high</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Swing Low</p>

          <p className="mt-2 text-xl font-bold text-gray-900">4306.00</p>

          <p className="mt-1 text-xs text-gray-400">Latest M5 swing low</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Range</p>

          <p className="mt-2 text-xl font-bold text-gray-900">44.00</p>

          <p className="mt-1 text-xs text-gray-400">High - Low</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Equilibrium</p>

          <p className="mt-2 text-xl font-bold text-gray-900">4328.00</p>

          <p className="mt-1 text-xs text-gray-400">50% midpoint</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Current Price</p>

          <p className="mt-2 text-xl font-bold text-blue-600">4325.00</p>

          <p className="mt-1 text-xs text-gray-400">3.00 below equilibrium</p>
        </div>

        <div className="rounded-xl bg-green-50 p-4">
          <p className="text-xs text-green-600">Current Zone</p>

          <p className="mt-2 text-xl font-bold text-green-700">DISCOUNT</p>

          <p className="mt-1 text-xs text-green-600">43.2% of the range</p>
        </div>
      </div>
    </div>
  );
}
