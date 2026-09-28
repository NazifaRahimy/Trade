const structureHistory = [
  {
    time: "10:30",
    timeframe: "M5",
    event: "HH",
    description: "New Higher High",
    type: "positive",
  },
  {
    time: "10:15",
    timeframe: "M5",
    event: "HL",
    description: "Higher Low confirmed",
    type: "neutral",
  },
  {
    time: "09:45",
    timeframe: "M5",
    event: "BOS",
    description: "Bullish Break of Structure",
    type: "positive",
  },
  {
    time: "09:40",
    timeframe: "M1",
    event: "BOS",
    description: "Entry structure confirmed",
    type: "positive",
  },
  {
    time: "09:30",
    timeframe: "M1",
    event: "CHoCH",
    description: "Bullish Change of Character",
    type: "info",
  },
];

const eventStyles = {
  positive: "bg-green-50 text-green-700",
  neutral: "bg-gray-100 text-gray-700",
  info: "bg-blue-50 text-blue-700",
};

export default function StructureHistory() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {" "}
      <div className="mb-5">
        {" "}
        <h2 className="text-lg font-semibold text-gray-900">
          Structure History{" "}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Recent BOS, CHoCH and swing structure events.
        </p>
      </div>
      <div className="space-y-3">
        {structureHistory.map((item, index) => (
          <div
            key={`${item.time}-${item.event}-${index}`}
            className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
          >
            <div className="w-12 text-xs font-medium text-gray-400">
              {item.time}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-md px-2 py-1 text-xs font-bold ${eventStyles[item.type as keyof typeof eventStyles]}`}
                >
                  {item.event}
                </span>

                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                  {item.timeframe}
                </span>
              </div>

              <p className="mt-1 text-xs text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
