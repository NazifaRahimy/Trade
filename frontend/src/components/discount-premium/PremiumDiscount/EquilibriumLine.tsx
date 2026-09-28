export default function EquilibriumLine() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {" "}
      <div className="flex items-center justify-between">
        {" "}
        <div>
          {" "}
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Midpoint{" "}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-gray-900">
            Equilibrium
          </h3>
        </div>
        <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-600">
          50%
        </span>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <div className="relative h-32 w-full overflow-hidden rounded-xl bg-gray-50">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-red-50" />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-green-50" />

          <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-gray-500" />

          <div className="absolute left-1/2 top-[calc(50%-12px)] -translate-x-1/2 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm">
            4328.00
          </div>

          <span className="absolute right-3 top-3 text-[10px] font-semibold text-red-500">
            PREMIUM
          </span>

          <span className="absolute right-3 bottom-3 text-[10px] font-semibold text-green-500">
            DISCOUNT
          </span>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          50% midpoint between the current swing high and swing low.
        </p>
      </div>
    </div>
  );
}
