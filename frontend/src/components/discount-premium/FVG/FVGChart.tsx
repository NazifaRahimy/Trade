"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const fvgData = [
  {time: "09:00", price: 4312},
  {time: "09:05", price: 4316},
  {time: "09:10", price: 4320},
  {time: "09:15", price: 4318},
  {time: "09:20", price: 4325},
  {time: "09:25", price: 4330},
  {time: "09:30", price: 4327},
  {time: "09:35", price: 4335},
  {time: "09:40", price: 4340},
  {time: "09:45", price: 4336},
  {time: "09:50", price: 4343},
  {time: "09:55", price: 4338},
  {time: "10:00", price: 4332},
  {time: "10:05", price: 4328},
  {time: "10:10", price: 4325},
];

const bullishFVGTop = 4327.4;
const bullishFVGBottom = 4325.1;

const bearishFVGTop = 4338.6;
const bearishFVGBottom = 4336.4;

const currentPrice = 4325;

export default function FVGChart() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Fair Value Gap Chart
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            XAUUSD · M1 · Active market imbalance zones
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-lg bg-green-50 px-3 py-1.5 text-green-600">
            Bullish FVG
          </span>

          <span className="rounded-lg bg-red-50 px-3 py-1.5 text-red-600">
            Bearish FVG
          </span>

          <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-blue-600">
            Current Price
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[460px] w-full p-4 sm:p-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={fvgData}
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
              domain={[4305, 4348]}
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

            {/* Bullish FVG */}
            <ReferenceArea
              y1={bullishFVGBottom}
              y2={bullishFVGTop}
              fill="#22c55e"
              fillOpacity={0.12}
              stroke="#16a34a"
              strokeOpacity={0.5}
              label={{
                value: "Bullish FVG",
                position: "insideTopLeft",
                fill: "#16a34a",
                fontSize: 10,
              }}
            />

            {/* Bearish FVG */}
            <ReferenceArea
              y1={bearishFVGBottom}
              y2={bearishFVGTop}
              fill="#ef4444"
              fillOpacity={0.12}
              stroke="#dc2626"
              strokeOpacity={0.5}
              label={{
                value: "Bearish FVG",
                position: "insideTopLeft",
                fill: "#dc2626",
                fontSize: 10,
              }}
            />

            {/* Current Price */}
            <ReferenceLine
              y={currentPrice}
              stroke="#2563eb"
              strokeWidth={2}
              strokeDasharray="6 4"
              label={{
                value: "Current 4325",
                position: "insideBottomRight",
                fill: "#2563eb",
                fontSize: 10,
              }}
            />

            {/* Price */}
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

      {/* Bottom Info */}
      <div className="grid grid-cols-1 border-t border-gray-100 sm:grid-cols-3">
        <div className="border-b border-gray-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-xs text-gray-500">Bullish FVG</p>
          <p className="mt-1 font-semibold text-green-600">4325.10 – 4327.40</p>
        </div>

        <div className="border-b border-gray-100 p-4 sm:border-b-0 sm:border-r">
          <p className="text-xs text-gray-500">Bearish FVG</p>
          <p className="mt-1 font-semibold text-red-600">4336.40 – 4338.60</p>
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500">Current Price</p>
          <p className="mt-1 font-semibold text-blue-600">4325.00</p>
        </div>
      </div>
    </div>
  );
}
