export default function DiscountZone() {
  return (
    <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
      {" "}
      <div className="flex items-center justify-between">
        {" "}
        <div>
          {" "}
          <p className="text-xs font-semibold uppercase tracking-wide text-green-500">
            Lower Range{" "}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-gray-900">
            Discount Zone
          </h3>
        </div>
        <span className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-bold text-green-600">
          0% - 50%
        </span>
      </div>
      <div className="mt-5 rounded-xl bg-green-50 p-4">
        <p className="text-sm text-green-700">
          Price area below the equilibrium level.
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-green-500">Swing Low</p>
            <p className="text-lg font-bold text-green-700">4306.00</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-green-500">Equilibrium</p>
            <p className="text-lg font-bold text-green-700">4328.00</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-gray-500">Current Price</span>

        <span className="font-semibold text-green-600">4325.00</span>
      </div>
    </div>
  );
}
