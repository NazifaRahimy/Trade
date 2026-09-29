const stats = [
  {
    label: "Open Trades",
    value: "3",
    description: "Currently active",
  },
  {
    label: "Today's Trades",
    value: "8",
    description: "Executed today",
  },
  {
    label: "Profit Today",
    value: "+$184.50",
    description: "Realized + floating",
  },
  {
    label: "Win Rate",
    value: "75%",
    description: "Today's performance",
  },
];

export default function TradeStats() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <p className="text-sm font-medium text-gray-500">{stat.label}</p>

          <p
            className={`mt-2 text-2xl font-bold ${
              stat.label === "Profit Today" ? "text-green-600" : "text-gray-900"
            }`}
          >
            {stat.value}
          </p>

          <p className="mt-1 text-xs text-gray-400">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
