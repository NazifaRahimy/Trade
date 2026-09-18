"use client";

export default function CopyAllocation() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">Copy Allocation</p>

      <h2 className="mt-1 text-xl font-bold text-slate-950">$18,450.50</h2>

      <div className="mt-8 flex items-center justify-center">
        <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-[conic-gradient(#2563eb_0_48%,#8b5cf6_48%_70%,#22c55e_70%_86%,#f59e0b_86%_100%)]">
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white">
            <span className="text-xs text-slate-500">Total</span>

            <span className="mt-1 text-xl font-bold text-slate-950">
              $18.4K
            </span>
          </div>
        </div>
      </div>

      <div className="mt-7 space-y-3">
        <AllocationItem
          color="bg-blue-600"
          name="Amiri Pro Trader"
          value="48%"
        />

        <AllocationItem
          color="bg-purple-500"
          name="Alpha Signals"
          value="22%"
        />

        <AllocationItem
          color="bg-emerald-500"
          name="Crypto Master"
          value="16%"
        />

        <AllocationItem color="bg-orange-500" name="Others" value="14%" />
      </div>
    </div>
  );
}

function AllocationItem({
  color,
  name,
  value,
}: {
  color: string;
  name: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 text-slate-600">
        <span className={`h-3 w-3 rounded-full ${color}`} />
        {name}
      </span>

      <span className="font-semibold">{value}</span>
    </div>
  );
}
