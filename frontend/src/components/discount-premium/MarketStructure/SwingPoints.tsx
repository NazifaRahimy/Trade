const swingPoints = [
  {
    type: "HH",
    price: "4350.00",
    timeframe: "M5",
    time: "10:30",
    description: "Higher High",
    style: "bg-green-50 text-green-700",
  },
  {
    type: "HL",
    price: "4327.00",
    timeframe: "M5",
    time: "10:15",
    description: "Higher Low",
    style: "bg-blue-50 text-blue-700",
  },
  {
    type: "HH",
    price: "4348.00",
    timeframe: "M5",
    time: "09:45",
    description: "Higher High",
    style: "bg-green-50 text-green-700",
  },
  {
    type: "HL",
    price: "4333.00",
    timeframe: "M5",
    time: "09:40",
    description: "Higher Low",
    style: "bg-blue-50 text-blue-700",
  },
];

export default function SwingPoints() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {" "}
      <div className="mb-5">
        {" "}
        <h2 className="text-lg font-semibold text-gray-900">Swing Points</h2>
        <p className="mt-1 text-sm text-gray-500">
          Recently identified market structure points.
        </p>
      </div>
      <div className="space-y-3">
        {swingPoints.map((point, index) => (
          <div
            key={`${point.type}-${index}`}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-4"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${point.style}`}
              >
                {point.type}
              </span>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {point.description}
                </p>

                <p className="mt-0.5 text-xs text-gray-500">
                  {point.timeframe} · {point.time}
                </p>
              </div>
            </div>

            <p className="text-sm font-bold text-gray-900">{point.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
