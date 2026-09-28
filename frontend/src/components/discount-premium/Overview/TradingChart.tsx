"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {FiBarChart2} from "react-icons/fi";

type CandleData = {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  bullishFVG?: boolean;
  bearishFVG?: boolean;
  entry?: number;
  sl?: number;
  tp1?: number;
  tp2?: number;
};

const staticData: CandleData[] = [
  {time: "09:00", open: 4310, high: 4318, low: 4306, close: 4316},
  {time: "09:05", open: 4316, high: 4324, low: 4312, close: 4321},
  {time: "09:10", open: 4321, high: 4328, low: 4317, close: 4325},
  {
    time: "09:15",
    open: 4325,
    high: 4332,
    low: 4321,
    close: 4329,
    bullishFVG: true,
  },
  {time: "09:20", open: 4329, high: 4335, low: 4325, close: 4331},
  {time: "09:25", open: 4331, high: 4337, low: 4326, close: 4328},
  {time: "09:30", open: 4328, high: 4332, low: 4319, close: 4322},
  {time: "09:35", open: 4322, high: 4327, low: 4315, close: 4318},
  {time: "09:40", open: 4318, high: 4325, low: 4314, close: 4323},
  {
    time: "09:45",
    open: 4323,
    high: 4330,
    low: 4320,
    close: 4328,
    entry: 4325,
  },
  {time: "09:50", open: 4328, high: 4336, low: 4324, close: 4334},
  {time: "09:55", open: 4334, high: 4340, low: 4329, close: 4337},
  {time: "10:00", open: 4337, high: 4345, low: 4333, close: 4342},
  {time: "10:05", open: 4342, high: 4348, low: 4337, close: 4345},
  {time: "10:10", open: 4345, high: 4350, low: 4338, close: 4340},
  {time: "10:15", open: 4340, high: 4344, low: 4328, close: 4332},
  {time: "10:20", open: 4332, high: 4338, low: 4325, close: 4329},
  {time: "10:25", open: 4329, high: 4336, low: 4327, close: 4334},
  {time: "10:30", open: 4334, high: 4342, low: 4330, close: 4339},
  {time: "10:35", open: 4339, high: 4346, low: 4335, close: 4343},
];

const swingHigh = 4350;
const swingLow = 4306;
const equilibrium = (swingHigh + swingLow) / 2;

const entryPrice = 4325;
const stopLoss = 4315;
const takeProfit1 = 4335;
const takeProfit2 = 4345;
const takeProfit3 = 4360;

function CandleShape(props: any) {
  const {x, y, width, height, payload, background} = props;

  if (!payload || x === undefined || y === undefined) {
    return null;
  }

  const {open, close, high, low} = payload;

  const chartHeight = background?.height ?? 0;
  const chartY = background?.y ?? 0;

  const priceRange = 44;
  const pixelsPerPrice = chartHeight / priceRange;

  const highY = chartY + (swingHigh - high) * pixelsPerPrice;
  const lowY = chartY + (swingHigh - low) * pixelsPerPrice;
  const openY = chartY + (swingHigh - open) * pixelsPerPrice;
  const closeY = chartY + (swingHigh - close) * pixelsPerPrice;

  const bodyTop = Math.min(openY, closeY);
  const bodyHeight = Math.max(Math.abs(openY - closeY), 2);

  const bullish = close >= open;

  return (
    <g>
      <line
        x1={x + width / 2}
        y1={highY}
        x2={x + width / 2}
        y2={lowY}
        stroke={bullish ? "#16a34a" : "#dc2626"}
        strokeWidth={1.5}
      />
      ```
      <rect
        x={x + width * 0.2}
        y={bodyTop}
        width={width * 0.6}
        height={bodyHeight}
        rx={1}
        fill={bullish ? "#22c55e" : "#ef4444"}
        stroke={bullish ? "#15803d" : "#b91c1c"}
      />
    </g>
  );
}

function CustomTooltip({active, payload, label}: any) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const candle = payload[0]?.payload;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
      {" "}
      <p className="mb-2 text-xs font-semibold text-gray-700">{label}</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
        <span className="text-gray-500">Open</span>
        <span className="font-semibold text-gray-800">{candle.open}</span>

        <span className="text-gray-500">High</span>
        <span className="font-semibold text-gray-800">{candle.high}</span>

        <span className="text-gray-500">Low</span>
        <span className="font-semibold text-gray-800">{candle.low}</span>

        <span className="text-gray-500">Close</span>
        <span className="font-semibold text-gray-800">{candle.close}</span>
      </div>
    </div>
  );
}

export default function TradingChart() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {/* Header */}{" "}
      <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
        {" "}
        <div>
          {" "}
          <div className="flex items-center gap-2">
            {" "}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              {" "}
              <FiBarChart2 size={20} />{" "}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Live Trading Chart
              </h3>

              <p className="text-sm text-gray-500">
                XAUUSD · Market Structure + FVG + Entry
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
            M5
          </span>

          <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
            M1
          </span>

          <span className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
            Market Open
          </span>
        </div>
      </div>
      {/* Chart */}
      <div className="h-[500px] w-full p-4 sm:p-6">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={staticData}
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
              tick={{
                fontSize: 11,
                fill: "#6b7280",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[4300, 4365]}
              orientation="right"
              tick={{
                fontSize: 11,
                fill: "#6b7280",
              }}
              axisLine={false}
              tickLine={false}
              width={50}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#94a3b8",
                strokeDasharray: "4 4",
              }}
            />

            {/* Premium Zone */}
            <ReferenceArea
              y1={equilibrium}
              y2={swingHigh}
              fill="#fee2e2"
              fillOpacity={0.35}
              ifOverflow="extendDomain"
            />

            {/* Discount Zone */}
            <ReferenceArea
              y1={swingLow}
              y2={equilibrium}
              fill="#dcfce7"
              fillOpacity={0.35}
              ifOverflow="extendDomain"
            />

            {/* Equilibrium */}
            <ReferenceLine
              y={equilibrium}
              stroke="#64748b"
              strokeDasharray="6 4"
              label={{
                value: "50% Equilibrium",
                position: "insideTopRight",
                fontSize: 10,
                fill: "#64748b",
              }}
            />

            {/* Entry */}
            <ReferenceLine
              y={entryPrice}
              stroke="#2563eb"
              strokeWidth={2}
              label={{
                value: "ENTRY 4325",
                position: "insideTopLeft",
                fontSize: 10,
                fill: "#2563eb",
              }}
            />

            {/* Stop Loss */}
            <ReferenceLine
              y={stopLoss}
              stroke="#dc2626"
              strokeDasharray="5 4"
              label={{
                value: "SL 4315",
                position: "insideBottomLeft",
                fontSize: 10,
                fill: "#dc2626",
              }}
            />

            {/* TP1 */}
            <ReferenceLine
              y={takeProfit1}
              stroke="#16a34a"
              strokeDasharray="5 4"
              label={{
                value: "TP1 4335",
                position: "insideTopLeft",
                fontSize: 10,
                fill: "#16a34a",
              }}
            />

            {/* TP2 */}
            <ReferenceLine
              y={takeProfit2}
              stroke="#16a34a"
              strokeDasharray="5 4"
              label={{
                value: "TP2 4345",
                position: "insideTopLeft",
                fontSize: 10,
                fill: "#16a34a",
              }}
            />

            {/* TP3 */}
            <ReferenceLine
              y={takeProfit3}
              stroke="#16a34a"
              strokeDasharray="5 4"
              label={{
                value: "TP3 4360",
                position: "insideTopLeft",
                fontSize: 10,
                fill: "#16a34a",
              }}
            />

            {/* Candles */}
            <Bar
              dataKey="close"
              shape={<CandleShape />}
              isAnimationActive={false}
            />

            {/* Current Price */}
            <Line
              type="monotone"
              dataKey="close"
              stroke="transparent"
              dot={false}
              activeDot={false}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      {/* Chart Information */}
      <div className="grid grid-cols-2 border-t border-gray-100 sm:grid-cols-4 lg:grid-cols-7">
        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Market</p>
          <p className="mt-1 text-sm font-semibold text-gray-900">XAUUSD</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">M5 Structure</p>
          <p className="mt-1 text-sm font-semibold text-green-600">Bullish</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">M1 Structure</p>
          <p className="mt-1 text-sm font-semibold text-green-600">Bullish</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Current Zone</p>
          <p className="mt-1 text-sm font-semibold text-green-600">Discount</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">FVG</p>
          <p className="mt-1 text-sm font-semibold text-blue-600">Active</p>
        </div>

        <div className="border-r border-gray-100 p-4">
          <p className="text-xs text-gray-500">Entry</p>
          <p className="mt-1 text-sm font-semibold text-blue-600">4325</p>
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500">Signal</p>
          <p className="mt-1 text-sm font-semibold text-green-600">Valid</p>
        </div>
      </div>
    </div>
  );
}
