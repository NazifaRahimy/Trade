"use client";

import {useState} from "react";

export default function TakeProfitSettings() {
  const [tp1, setTp1] = useState("Previous High / Low");
  const [tp2, setTp2] = useState("Liquidity Target");
  const [tp3, setTp3] = useState("Extended Target");

  const levels = [
    {
      name: "TP1",
      value: tp1,
      setValue: setTp1,
      options: ["Previous High / Low", "Fixed Risk / Reward", "Equilibrium"],
    },
    {
      name: "TP2",
      value: tp2,
      setValue: setTp2,
      options: [
        "Liquidity Target",
        "Previous High / Low",
        "Fixed Risk / Reward",
      ],
    },
    {
      name: "TP3",
      value: tp3,
      setValue: setTp3,
      options: ["Extended Target", "Liquidity Target", "Previous High / Low"],
    },
  ];

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Take Profit Settings
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Define how take profit levels should be calculated.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {levels.map((level) => (
          <div
            key={level.name}
            className="rounded-xl border border-gray-100 bg-gray-50/60 p-4"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-600">
                {level.name}
              </span>
            </div>

            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
              Target Method
            </label>

            <select
              value={level.value}
              onChange={(e) => level.setValue(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500"
            >
              {level.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}
