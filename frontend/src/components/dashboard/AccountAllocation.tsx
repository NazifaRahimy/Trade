"use client";

import {motion} from "framer-motion";

export default function AccountAllocation() {
  return (
    <motion.div
      initial={{opacity: 0, x: 20}}
      animate={{opacity: 1, x: 0}}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <p className="text-sm text-slate-500">Account Allocation</p>

      <h3 className="mt-1 text-xl font-bold text-slate-900">Portfolio</h3>

      {/* Donut Chart */}
      <div className="my-8 flex justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-[conic-gradient(#2563eb_0deg_187.2deg,#22c55e_187.2deg_288deg,#fb923c_288deg_360deg)]">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white">
            <div className="text-center">
              <p className="text-xs text-slate-500">Total</p>

              <p className="font-bold text-slate-900">$28.4K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Allocation Items */}
      <div className="space-y-4">
        <AllocationItem label="Forex" value="52%" color="bg-blue-500" />

        <AllocationItem label="Crypto" value="28%" color="bg-emerald-500" />

        <AllocationItem label="Cash" value="20%" color="bg-orange-400" />
      </div>
    </motion.div>
  );
}

function AllocationItem({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        {/* Color indicator */}
        <span className={`h-3 w-3 rounded-full ${color}`} />

        <span className="text-slate-600">{label}</span>
      </div>

      <span className="font-semibold text-slate-900">{value}</span>
    </div>
  );
}
