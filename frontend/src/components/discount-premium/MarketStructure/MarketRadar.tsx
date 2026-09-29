import {
  FiActivity,
  FiArrowDown,
  FiArrowUp,
  FiDollarSign,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const marketData = {
  symbol: "XAUUSD",
  name: "Gold / US Dollar",
  currentPrice: "4,334.20",
  bid: "4,334.10",
  ask: "4,334.30",
  spread: "0.20",
  dailyChange: "+0.42%",
  dailyChangeValue: "+18.10",
};

export default function MarketRadar() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Market Radar</h2>

        <p className="mt-1 text-sm text-gray-500">
          Live gold price and spread information
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {/* Symbol */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">Symbol</p>

            <FiDollarSign size={18} className="text-gray-400" />
          </div>

          <h3 className="text-xl font-bold text-gray-900">
            {marketData.symbol}
          </h3>

          <p className="mt-1 text-xs text-gray-400">{marketData.name}</p>
        </div>

        {/* Current Price */}
        <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">Current Price</p>

            <FiTrendingUp size={18} className="text-blue-600" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            {marketData.currentPrice}
          </h3>

          <div className="mt-2 flex items-center gap-1 text-sm text-emerald-600">
            <FiArrowUp size={14} />
            {marketData.dailyChange}
          </div>
        </div>

        {/* Bid */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">Bid</p>

            <FiArrowDown size={18} className="text-red-500" />
          </div>

          <h3 className="text-xl font-bold text-gray-900">{marketData.bid}</h3>

          <p className="mt-1 text-xs text-gray-400">Sell price</p>
        </div>

        {/* Ask */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">Ask</p>

            <FiArrowUp size={18} className="text-emerald-500" />
          </div>

          <h3 className="text-xl font-bold text-gray-900">{marketData.ask}</h3>

          <p className="mt-1 text-xs text-gray-400">Buy price</p>
        </div>

        {/* Spread */}
        <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">Spread</p>

            <FiZap size={18} className="text-amber-500" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            {marketData.spread}
          </h3>

          <p className="mt-1 text-xs text-amber-600">Gold spread</p>
        </div>

        {/* Daily Change */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">Daily Change</p>

            <FiActivity size={18} className="text-emerald-500" />
          </div>

          <h3 className="text-xl font-bold text-emerald-600">
            {marketData.dailyChange}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {marketData.dailyChangeValue}
          </p>
        </div>
      </div>
    </section>
  );
}
