"use client";

import {motion} from "framer-motion";
import {FiBarChart2} from "react-icons/fi";

const dailyData = [
  {day: "Mon", profit: 42.8},
  {day: "Tue", profit: 65.2},
  {day: "Wed", profit: -18.4},
  {day: "Thu", profit: 72.6},
  {day: "Fri", profit: 38.9},
  {day: "Sat", profit: 24.5},
  {day: "Sun", profit: 31.8},
];

const maxValue = Math.max(...dailyData.map((item) => Math.abs(item.profit)));

export default function DailyPerformance() {
  const totalProfit = dailyData.reduce((total, item) => total + item.profit, 0);

  const profitableDays = dailyData.filter((item) => item.profit > 0).length;

  const losingDays = dailyData.filter((item) => item.profit < 0).length;

  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.4}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Daily Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your daily profit and loss from copied trades.
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <FiBarChart2 size={19} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="text-xs text-slate-500">Net P/L</p>

          <p className="mt-1 text-lg font-bold text-emerald-600">
            +${totalProfit.toFixed(2)}
          </p>
        </div>

        <div className="rounded-xl bg-emerald-50 p-3">
          <p className="text-xs text-emerald-600">Profitable Days</p>

          <p className="mt-1 text-lg font-bold text-slate-900">
            {profitableDays}
          </p>
        </div>

        <div className="rounded-xl bg-red-50 p-3">
          <p className="text-xs text-red-600">Losing Days</p>

          <p className="mt-1 text-lg font-bold text-slate-900">{losingDays}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex h-[230px] items-end justify-between gap-2 border-b border-slate-200 px-2">
          {dailyData.map((item) => {
            const isPositive = item.profit >= 0;

            const height = (Math.abs(item.profit) / maxValue) * 170;

            return (
              <div
                key={item.day}
                className="flex h-full flex-1 flex-col items-center justify-end"
              >
                <span
                  className={`mb-2 text-[11px] font-medium ${
                    isPositive ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {item.profit >= 0 ? "+" : ""}${item.profit.toFixed(2)}
                </span>

                <div
                  className={`w-full max-w-[42px] rounded-t-lg ${
                    isPositive ? "bg-emerald-500" : "bg-red-400"
                  }`}
                  style={{
                    height: `${height}px`,
                  }}
                />

                <span className="mt-3 text-xs font-medium text-slate-500">
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
