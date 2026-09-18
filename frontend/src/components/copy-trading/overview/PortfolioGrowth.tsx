"use client";

export default function PortfolioGrowth() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Copy Trading Performance</p>

          <h2 className="mt-1 text-xl font-bold text-slate-950">
            Portfolio Growth
          </h2>
        </div>

        <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none focus:border-blue-500">
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
          <option>Last 6 Months</option>
        </select>
      </div>

      <div className="relative mt-8 h-64 overflow-hidden rounded-xl bg-slate-50">
        <div className="absolute inset-0 flex flex-col justify-between px-5 py-5">
          <span className="border-t border-slate-200" />
          <span className="border-t border-slate-200" />
          <span className="border-t border-slate-200" />
          <span className="border-t border-slate-200" />
          <span className="border-t border-slate-200" />
        </div>

        <svg
          viewBox="0 0 800 260"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="copyChartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />

              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0 215 L70 190 L140 200 L210 160 L280 175 L350 130 L420 145 L490 105 L560 125 L630 80 L700 100 L800 45 L800 260 L0 260 Z"
            fill="url(#copyChartGradient)"
          />

          <path
            d="M0 215 L70 190 L140 200 L210 160 L280 175 L350 130 L420 145 L490 105 L560 125 L630 80 L700 100 L800 45"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="800" cy="45" r="7" fill="#2563eb" />
        </svg>
      </div>
    </div>
  );
}
