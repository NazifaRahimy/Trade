export default function PremiumZone() {
  return (
    <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
      {" "}
      <div className="flex items-center justify-between">
        {" "}
        <div>
          {" "}
          <p className="text-xs font-semibold uppercase tracking-wide text-red-500">
            Upper Range{" "}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-gray-900">
            Premium Zone
          </h3>
        </div>
        <span className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
          50% - 100%
        </span>
      </div>
      <div className="mt-5 rounded-xl bg-red-50 p-4">
        <p className="text-sm text-red-700">
          Price area above the equilibrium level.
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-red-500">Equilibrium</p>
            <p className="text-lg font-bold text-red-700">4328.00</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-red-500">Swing High</p>
            <p className="text-lg font-bold text-red-700">4350.00</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-gray-500">Current Price</span>

        <span className="font-semibold text-gray-900">4325.00</span>
      </div>
    </div>
  );
}
