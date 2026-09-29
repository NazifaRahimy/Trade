interface TradeDetailsProps {
  trade?: {
    id: string;
    symbol: string;
    direction: string;
    entry: string;
    exit: string;
    result: string;
    rr: string;
    duration: string;
    closedAt: string;
    status: string;
  };
}

export default function TradeDetails({trade}: TradeDetailsProps) {
  if (!trade) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Select a trade to view details.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400">Trade Details</p>

          <h3 className="mt-1 text-xl font-bold text-gray-900">
            {trade.symbol}
          </h3>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            trade.status === "Win"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {trade.status}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-400">Trade ID</p>
          <p className="mt-1 text-sm font-semibold text-gray-800">{trade.id}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Direction</p>
          <p className="mt-1 text-sm font-semibold text-gray-800">
            {trade.direction}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Entry</p>
          <p className="mt-1 text-sm font-semibold text-gray-800">
            {trade.entry}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Exit</p>
          <p className="mt-1 text-sm font-semibold text-gray-800">
            {trade.exit}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Result</p>
          <p
            className={`mt-1 text-sm font-bold ${
              trade.status === "Win" ? "text-green-600" : "text-red-600"
            }`}
          >
            {trade.result}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Risk / Reward</p>
          <p className="mt-1 text-sm font-semibold text-gray-800">{trade.rr}</p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Duration</span>

          <span className="text-sm font-semibold text-gray-800">
            {trade.duration}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-gray-500">Closed At</span>

          <span className="text-sm font-semibold text-gray-800">
            {trade.closedAt}
          </span>
        </div>
      </div>
    </div>
  );
}
