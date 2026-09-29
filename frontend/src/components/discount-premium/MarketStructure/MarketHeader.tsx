import {FiActivity, FiClock} from "react-icons/fi";

export default function MarketHeader() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiActivity size={22} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">Market</h1>

          <p className="mt-1 text-sm text-gray-500">
            Live price radar and gold market spread
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
        </span>

        <div>
          <p className="text-xs text-gray-400">Market Status</p>

          <p className="text-sm font-semibold text-emerald-600">OPEN</p>
        </div>

        <FiClock size={15} className="ml-2 text-gray-400" />
      </div>
    </div>
  );
}
