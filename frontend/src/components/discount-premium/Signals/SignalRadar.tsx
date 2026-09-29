const radarStats = [
  {
    label: "Pending Signals",
    value: "4",
    description: "Waiting for confirmation",
  },
  {
    label: "Strong Signals",
    value: "2",
    description: "Confidence above 80%",
  },
  {
    label: "Bullish",
    value: "3",
    description: "Buy opportunities",
  },
  {
    label: "Bearish",
    value: "1",
    description: "Sell opportunities",
  },
];

export default function SignalRadar() {
  return (
    <div className="mb-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Signal Radar</h2>

        <p className="mt-1 text-sm text-gray-500">
          Live overview of signals detected by the strategy scanner.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {radarStats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">{item.label}</p>

            <p className="mt-2 text-2xl font-bold text-gray-900">
              {item.value}
            </p>

            <p className="mt-1 text-xs text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
