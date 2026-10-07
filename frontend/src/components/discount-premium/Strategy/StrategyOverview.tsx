"use client";

import React from "react";

export default function StrategyOverview({
  data,
  tick,
}: {
  data: any;
  tick: any;
}) {
  const structure = data?.structure;
  const range = data?.dealing_range;
  const symbol = tick?.symbol || structure?.symbol_name || "—";

  const timeframe =
    structure?.timeframe ||
    data?.timeframe ||
    "—";

  const confirmationTimeframe = "M1";

  const direction =
    structure?.trend === "BULLISH"
      ? "BUY"
      : structure?.trend === "BEARISH"
        ? "SELL"
        : "—";

  const currentPrice =
    tick?.ask != null
      ? Number(tick.ask)
      : tick?.bid != null
        ? Number(tick.bid)
        : null;

  let zone = "—";

  if (range && currentPrice != null) {
    const high = Number(range.high);
    const low = Number(range.low);
    const midpoint =
      range.midpoint != null
        ? Number(range.midpoint)
        : (high + low) / 2;

    if (
      Number.isFinite(low) &&
      Number.isFinite(high) &&
      Number.isFinite(midpoint)
    ) {
      zone = currentPrice < midpoint ? "DISCOUNT" : "PREMIUM";
    }
  }

  const confidence = data?.setup?.confidence;

  const items = [
    {
      label: "Symbol",
      value: symbol,
    },
    {
      label: "Timeframe",
      value: timeframe,
    },
    {
      label: "Confirmation",
      value: confirmationTimeframe,
    },
    {
      label: "Direction",
      value: direction,
    },
    {
      label: "Zone",
      value: zone,
    },
    {
      label: "Confidence",
      value:
        confidence != null
          ? `${Number(confidence).toFixed(0)}%`
          : "—",
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            {item.label}
          </p>

          <p
            className={`mt-2 text-lg font-bold ${
              item.label === "Direction"
                ? item.value === "BUY"
                  ? "text-green-600"
                  : item.value === "SELL"
                    ? "text-red-600"
                    : "text-gray-900"
                : item.label === "Zone"
                  ? item.value === "DISCOUNT"
                    ? "text-blue-600"
                    : item.value === "PREMIUM"
                      ? "text-purple-600"
                      : "text-gray-900"
                  : "text-gray-900"
            }`}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
