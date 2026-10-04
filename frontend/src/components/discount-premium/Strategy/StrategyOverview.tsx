export default function StrategyOverview() {
  const items = [
    {
      label: "Symbol",
      value: "XAUUSD",
    },
    {
      label: "Timeframe",
      value: "M5",
    },
    {
      label: "Confirmation",
      value: "M1",
    },
    {
      label: "Direction",
      value: "BUY",
    },
    {
      label: "Zone",
      value: "DISCOUNT",
    },
    {
      label: "Confidence",
      value: "87%",
    },
  ];
  return (
    <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {item.label}
          </p>
          <p
            className={`mt-2 text-lg font-bold ${
              item.label === "Direction"
                ? "text-green-600"
                : item.label === "Zone"
                  ? "text-blue-600"
                  : "text-gray-900"
            }`} >
            {item.value}
          </p>
        </div>
      ))}َ
    </div>
  );
}
