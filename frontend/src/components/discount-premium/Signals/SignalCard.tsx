interface Signal {
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
}

interface SignalCardProps {
  signal: Signal;
  selected: boolean;
  onSelect: () => void;
}

export default function SignalCard({
  signal,
  selected,
  onSelect,
}: SignalCardProps) {
  const isBuy = signal.direction === "BUY";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:shadow-md ${
        selected ? "border-blue-500 ring-1 ring-blue-500" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {signal.symbol}
            </span>

            <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
              {signal.timeframe}
            </span>
          </div>

          <p className="mt-1 text-xs text-gray-400">
            {signal.id} · Detected {signal.detected}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            isBuy ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {signal.direction}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-400">Entry</p>
          <p className="mt-1 text-sm font-bold text-gray-900">{signal.entry}</p>
        </div>

        <div className="rounded-xl bg-red-50 p-3">
          <p className="text-xs text-red-400">Stop Loss</p>
          <p className="mt-1 text-sm font-bold text-red-700">
            {signal.stopLoss}
          </p>
        </div>

        <div className="rounded-xl bg-green-50 p-3">
          <p className="text-xs text-green-500">TP1</p>
          <p className="mt-1 text-sm font-bold text-green-700">
            {signal.takeProfit1}
          </p>
        </div>

        <div className="rounded-xl bg-green-50 p-3">
          <p className="text-xs text-green-500">TP2</p>
          <p className="mt-1 text-sm font-bold text-green-700">
            {signal.takeProfit2}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-xs text-gray-400">Setup</p>

          <p className="mt-1 text-sm font-semibold text-gray-700">
            {signal.setup}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400">Confidence</p>

          <p
            className={`mt-1 text-lg font-bold ${
              signal.confidence >= 80 ? "text-green-600" : "text-blue-600"
            }`}
          >
            {signal.confidence}%
          </p>
        </div>
      </div>
    </button>
  );
}
