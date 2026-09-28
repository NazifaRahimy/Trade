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

const structureData = [
  {time: "09:00", price: 4306, label: "LL"},
  {time: "09:05", price: 4318, label: "HH"},
  {time: "09:10", price: 4312, label: "HL"},
  {time: "09:15", price: 4328, label: "HH"},
  {time: "09:20", price: 4321, label: "HL"},
  {time: "09:25", price: 4335, label: "HH"},
  {time: "09:30", price: 4327, label: "HL"},
  {time: "09:35", price: 4342, label: "HH"},
  {time: "09:40", price: 4333, label: "HL"},
  {time: "09:45", price: 4348, label: "BOS"},
  {time: "09:50", price: 4338, label: "HL"},
  {time: "09:55", price: 4350, label: "HH"},
];

export default function StructureChart() {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
      {" "}
      <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
        {" "}
        <div>
          {" "}
          <h2 className="text-lg font-semibold text-gray-900">
            Structure Chart{" "}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            XAUUSD · M5 market structure
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-lg bg-green-50 px-3 py-1.5 text-green-600">
            HH
          </span>

          <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-blue-600">
            HL
          </span>

          <span className="rounded-lg bg-purple-50 px-3 py-1.5 text-purple-600">
            BOS
          </span>
        </div>
      </div>
      <div className="h-[380px] w-full p-4 sm:p-6 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={structureData}
            margin={{
              top: 20,
              right: 0,
              left: 5,
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
              tick={{fontSize: 11, fill: "#6b7280"}}
            />

            <YAxis
              domain={[4295, 4360]}
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{fontSize: 11, fill: "#6b7280"}}
              width={50}
            />

            <Tooltip
              formatter={(value) => [Number(value ?? 0), "Price"]}
              labelFormatter={(label) => `Time: ${label}`}
            />

            <ReferenceLine
              y={4325}
              stroke="#94a3b8"
              strokeDasharray="6 4"
              label={{
                value: "Structure Level",
                position: "insideTopLeft",
                fontSize: 10,
                fill: "#64748b",
              }}
            />

            <Line
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{
                r: 4,
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
          <p className="text-xs text-gray-500">Trend</p>
          <p className="mt-1 font-semibold text-green-600">BULLISH</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Last Structure</p>
          <p className="mt-1 font-semibold text-gray-900">HH</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Previous</p>
          <p className="mt-1 font-semibold text-gray-900">HL</p>
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500">Structure</p>
          <p className="mt-1 font-semibold text-purple-600">BOS</p>
        </div>
      </div>
    </div>
  );
}
