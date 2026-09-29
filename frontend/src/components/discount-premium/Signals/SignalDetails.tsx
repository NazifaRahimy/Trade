interface SignalDetailsProps {
  signal: {
    id: string;
    symbol: string;
    direction: "BUY" | "SELL";
    timeframe: string;
    entry: string;
    stopLoss: string;
    takeProfit1: string;
    takeProfit2: string;
    confidence: number;
    setup: string;
    zone: string;
    detected: string;
    status: "Pending";
  };
}

export default function SignalDetails({signal}: SignalDetailsProps) {
  const isBuy = signal.direction === "BUY";

  const confirmations = [
    {
      label: "Market Structure",
      value: "Confirmed",
    },
    {
      label: "Premium / Discount",
      value: signal.zone,
    },
    {
      label: "Fair Value Gap",
      value: "Detected",
    },
    {
      label: "Timeframe Confirmation",
      value: signal.timeframe,
    },
    {
      label: "Trading Session",
      value: "Active",
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Signal Details
          </p>

          <h2 className="mt-1 text-xl font-bold text-gray-900">
            {signal.symbol}
          </h2>

          <p className="mt-1 text-xs text-gray-400">{signal.id}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            isBuy ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {signal.direction}
        </span>
      </div>

      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-blue-700">
            Signal Status
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-600">
            {signal.status}
          </span>
        </div>

        <p className="mt-2 text-xs text-blue-500">
          Waiting for trade execution confirmation.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-400">Entry</p>
          <p className="mt-1 font-bold text-gray-900">{signal.entry}</p>
        </div>

        <div className="rounded-xl bg-red-50 p-3">
          <p className="text-xs text-red-400">Stop Loss</p>
          <p className="mt-1 font-bold text-red-700">{signal.stopLoss}</p>
        </div>

        <div className="rounded-xl bg-green-50 p-3">
          <p className="text-xs text-green-500">Take Profit 1</p>
          <p className="mt-1 font-bold text-green-700">{signal.takeProfit1}</p>
        </div>

        <div className="rounded-xl bg-green-50 p-3">
          <p className="text-xs text-green-500">Take Profit 2</p>
          <p className="mt-1 font-bold text-green-700">{signal.takeProfit2}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-900">
          Scanner Confirmation
        </h3>

        <div className="mt-3 space-y-2">
          {confirmations.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-3"
            >
              <span className="text-xs text-gray-500">{item.label}</span>

              <span className="text-xs font-semibold text-green-600">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-xs text-gray-400">Setup</p>
          <p className="mt-1 text-sm font-semibold text-gray-700">
            {signal.setup}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Confidence</p>
          <p className="mt-1 text-xl font-bold text-green-600">
            {signal.confidence}%
          </p>
        </div>
      </div>
    </div>
  );
}
