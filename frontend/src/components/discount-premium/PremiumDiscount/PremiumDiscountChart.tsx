"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const rangeData = [
  {time: "09:00", price: 4308},
  {time: "09:05", price: 4312},
  {time: "09:10", price: 4318},
  {time: "09:15", price: 4324},
  {time: "09:20", price: 4319},
  {time: "09:25", price: 4328},
  {time: "09:30", price: 4335},
  {time: "09:35", price: 4341},
  {time: "09:40", price: 4336},
  {time: "09:45", price: 4348},
  {time: "09:50", price: 4342},
  {time: "09:55", price: 4337},
  {time: "10:00", price: 4330},
  {time: "10:05", price: 4325},
];

const swingHigh = 4350;
const swingLow = 4306;
const equilibrium = 4328;
const currentPrice = 4325;

export default function PremiumDiscountChart() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {" "}
      <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
        {" "}
        <div>
          {" "}
          <h2 className="text-lg font-semibold text-gray-900">
            Premium / Discount Chart{" "}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            XAUUSD · M5 · Current market range
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-lg bg-red-50 px-3 py-1.5 text-red-600">
            Premium
          </span>

          <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-gray-600">
            Equilibrium
          </span>

          <span className="rounded-lg bg-green-50 px-3 py-1.5 text-green-600">
            Discount
          </span>
        </div>
      </div>
      <div className="h-[460px] w-full p-4 sm:p-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={rangeData}
            margin={{
              top: 20,
              right: 0,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 11,
                fill: "#6b7280",
              }}
            />

            <YAxis
              domain={[4298, 4358]}
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 11,
                fill: "#6b7280",
              }}
              width={50}
            />

            <Tooltip
              formatter={(value) => [value ?? 0, "Price"]}
              labelFormatter={(label) => `Time: ${label}`}
            />

            {/* Swing High */}
            <ReferenceLine
              y={swingHigh}
              stroke="#dc2626"
              strokeWidth={2}
              label={{
                value: "Swing High 4350",
                position: "insideTopRight",
                fill: "#dc2626",
                fontSize: 10,
              }}
            />

            {/* Equilibrium */}
            <ReferenceLine
              y={equilibrium}
              stroke="#64748b"
              strokeDasharray="7 5"
              strokeWidth={2}
              label={{
                value: "50% Equilibrium 4328",
                position: "insideTopRight",
                fill: "#64748b",
                fontSize: 10,
              }}
            />

            {/* Current Price */}
            <ReferenceLine
              y={currentPrice}
              stroke="#2563eb"
              strokeWidth={2}
              label={{
                value: "Current 4325",
                position: "insideBottomRight",
                fill: "#2563eb",
                fontSize: 10,
              }}
            />

            {/* Swing Low */}
            <ReferenceLine
              y={swingLow}
              stroke="#16a34a"
              strokeWidth={2}
              label={{
                value: "Swing Low 4306",
                position: "insideBottomRight",
                fill: "#16a34a",
                fontSize: 10,
              }}
            />

            <Line
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{
                r: 3,
                fill: "#2563eb",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
              }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 border-t border-gray-100 sm:grid-cols-4">
        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Swing High</p>
          <p className="mt-1 font-semibold text-red-600">4350.00</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Equilibrium</p>
          <p className="mt-1 font-semibold text-gray-700">4328.00</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Current Price</p>
          <p className="mt-1 font-semibold text-blue-600">4325.00</p>
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500">Swing Low</p>
          <p className="mt-1 font-semibold text-green-600">4306.00</p>
        </div>
      </div>
    </div>
  );
}
