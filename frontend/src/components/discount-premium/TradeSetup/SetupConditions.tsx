const conditions = [
  {
    title: "M5 Market Structure",
    value: "Bullish",
    description: "Higher High and Higher Low confirmed.",
    status: "Confirmed",
    color: "green",
  },
  {
    title: "M1 Entry Confirmation",
    value: "BOS",
    description: "Bullish break of structure detected.",
    status: "Confirmed",
    color: "green",
  },
  {
    title: "Premium / Discount",
    value: "Discount",
    description: "Price is below equilibrium level.",
    status: "Valid",
    color: "green",
  },
  {
    title: "Fair Value Gap",
    value: "Bullish FVG",
    description: "Active FVG located inside entry zone.",
    status: "Valid",
    color: "green",
  },
  {
    title: "Risk / Reward",
    value: "1 : 2.5",
    description: "Setup meets the minimum reward requirement.",
    status: "Accepted",
    color: "blue",
  },
  {
    title: "Trading Session",
    value: "Active",
    description: "Current session is suitable for setup.",
    status: "Valid",
    color: "green",
  },
];

export default function SetupConditions() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Setup Conditions
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Conditions required before the trade setup becomes valid.
          </p>
        </div>

        <span className="w-fit rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
          6 / 6 CONFIRMED
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {conditions.map((condition) => (
          <div
            key={condition.title}
            className="rounded-xl border border-gray-100 bg-gray-50/60 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {condition.title}
                </p>

                <p className="mt-1 text-sm font-medium text-gray-700">
                  {condition.value}
                </p>
              </div>

              <span
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                  condition.color === "blue"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-green-50 text-green-600"
                }`}
              >
                {condition.status}
              </span>
            </div>

            <p className="mt-3 text-xs leading-5 text-gray-500">
              {condition.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
