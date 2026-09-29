export default function PremiumDiscount() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Premium / Discount
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Current price position based on the 50% equilibrium.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-gray-200">
        <div className="h-24 bg-red-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-red-700">PREMIUM</span>

            <span className="text-xs text-red-500">Expensive Zone</span>
          </div>
        </div>

        <div className="relative h-14 border-y border-gray-200 bg-gray-50">
          <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-gray-400" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
            50% Equilibrium
          </div>
        </div>

        <div className="h-24 bg-green-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-green-700">
              DISCOUNT
            </span>

            <span className="text-xs text-green-500">Cheap Zone</span>
          </div>
        </div>

        <div className="absolute left-1/2 top-[72%] -translate-x-1/2">
          <div className="rounded-lg border border-blue-200 bg-white px-4 py-2 text-center shadow-md">
            <p className="text-[10px] font-medium uppercase text-gray-400">
              Current Price
            </p>

            <p className="text-sm font-bold text-blue-600">4325.10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
