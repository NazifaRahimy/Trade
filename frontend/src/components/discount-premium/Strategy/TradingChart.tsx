"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {time: "09:00", price: 4312},
  {time: "09:05", price: 4316},
  {time: "09:10", price: 4314},
  {time: "09:15", price: 4320},
  {time: "09:20", price: 4318},
  {time: "09:25", price: 4324},
  {time: "09:30", price: 4322},
  {time: "09:35", price: 4327},
  {time: "09:40", price: 4325},
  {time: "09:45", price: 4330},
  {time: "09:50", price: 4328},
  {time: "09:55", price: 4332},
];

export default function TradingChart() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            ICT Trading Chart
          </h2>

          <p className="text-sm text-gray-500">
            XAUUSD · M5 · Live strategy analysis
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
          <span className="text-xs text-gray-500">Current Price</span>
          <span className="text-sm font-bold text-gray-900">4325.10</span>
        </div>
      </div>

      <div className="h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis domain={["dataMin - 5", "dataMax + 5"]} />

            <Tooltip />

            <Line type="monotone" dataKey="price" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <span className="rounded-lg bg-green-50 px-3 py-2 text-xs font-medium text-green-700">
          BUY
        </span>

        <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700">
          Discount
        </span>

        <span className="rounded-lg bg-purple-50 px-3 py-2 text-xs font-medium text-purple-700">
          FVG Detected
        </span>
      </div>
    </div>
  );
}
