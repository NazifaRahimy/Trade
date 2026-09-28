const stats = [
  {
    title: "Total Setups",
    value: "24",
    description: "Detected setups",
    icon: "📊",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    title: "Confirmed",
    value: "18",
    description: "Valid setups",
    icon: "✓",
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    title: "Successful",
    value: "15",
    description: "Target reached",
    icon: "↗",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    title: "Success Rate",
    value: "83.3%",
    description: "Confirmed setups",
    icon: "%",
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
];

export default function HistoryStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>

              <p className="mt-2 text-2xl font-bold text-gray-900">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-gray-400">{stat.description}</p>
            </div>

            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold ${stat.bg} ${stat.text}`}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
