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

const setupData = [
  {time: "09:30", price: 4318},
  {time: "09:35", price: 4321},
  {time: "09:40", price: 4326},
  {time: "09:45", price: 4323},
  {time: "09:50", price: 4329},
  {time: "09:55", price: 4327},
  {time: "10:00", price: 4324},
  {time: "10:05", price: 4325},
  {time: "10:10", price: 4328},
  {time: "10:15", price: 4331},
  {time: "10:20", price: 4335},
  {time: "10:25", price: 4340},
  {time: "10:30", price: 4345},
];

const entryLow = 4325.1;
const entryHigh = 4327.4;

const stopLoss = 4315;
const tp1 = 4335;
const tp2 = 4345;
const tp3 = 4360;

export default function SetupChart() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Trade Setup Chart
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            XAUUSD · Entry, Stop Loss and Take Profit levels
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-blue-600">
            Entry
          </span>

          <span className="rounded-lg bg-red-50 px-3 py-1.5 text-red-600">
            Stop Loss
          </span>

          <span className="rounded-lg bg-green-50 px-3 py-1.5 text-green-600">
            Take Profit
          </span>
        </div>
      </div>

      <div className="h-[480px] w-full p-4 sm:p-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={setupData}
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
              domain={[4310, 4365]}
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 11,
                fill: "#6b7280",
              }}
              width={55}
            />

            <Tooltip
              formatter={(value) => [value ?? 0, "Price"]}
              labelFormatter={(label) => `Time: ${label}`}
            />

            {/* Entry Zone */}
            <ReferenceArea
              y1={entryLow}
              y2={entryHigh}
              fill="#2563eb"
              fillOpacity={0.12}
              stroke="#2563eb"
              strokeOpacity={0.5}
              label={{
                value: "ENTRY ZONE",
                position: "insideTopLeft",
                fill: "#2563eb",
                fontSize: 10,
              }}
            />

            {/* Stop Loss */}
            <ReferenceLine
              y={stopLoss}
              stroke="#dc2626"
              strokeWidth={2}
              strokeDasharray="6 4"
              label={{
                value: "SL 4315",
                position: "insideBottomRight",
                fill: "#dc2626",
                fontSize: 10,
              }}
            />

            {/* TP1 */}
            <ReferenceLine
              y={tp1}
              stroke="#16a34a"
              strokeWidth={2}
              strokeDasharray="5 4"
              label={{
                value: "TP1 4335",
                position: "insideTopRight",
                fill: "#16a34a",
                fontSize: 10,
              }}
            />

            {/* TP2 */}
            <ReferenceLine
              y={tp2}
              stroke="#16a34a"
              strokeWidth={2}
              strokeDasharray="5 4"
              label={{
                value: "TP2 4345",
                position: "insideTopRight",
                fill: "#16a34a",
                fontSize: 10,
              }}
            />

            {/* TP3 */}
            <ReferenceLine
              y={tp3}
              stroke="#16a34a"
              strokeWidth={2}
              label={{
                value: "TP3 4360",
                position: "insideTopRight",
                fill: "#16a34a",
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

      <div className="grid grid-cols-2 border-t border-gray-100 sm:grid-cols-5">
        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Entry</p>
          <p className="mt-1 font-semibold text-blue-600">4325.10</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Stop Loss</p>
          <p className="mt-1 font-semibold text-red-600">4315.00</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">TP1</p>
          <p className="mt-1 font-semibold text-green-600">4335.00</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">TP2</p>
          <p className="mt-1 font-semibold text-green-600">4345.00</p>
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500">TP3</p>
          <p className="mt-1 font-semibold text-green-600">4360.00</p>
        </div>
      </div>
    </div>
  );
}
