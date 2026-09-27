"use client";

// 🚀 تعریف ساختار دیتای داینامیک تریدرها
type AllocationItemType = {
  id: number;
  name: string;
  percentage: string;
  color: string;
};

type CopyAllocationProps = {
  allocation: {
    total_allocated: string;
    traders: AllocationItemType[];
  } | null;
};

export default function CopyAllocation({ allocation }: CopyAllocationProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-sm font-text text-slate-500">Copy Allocation</h2>
      <div className="mt-1 text-xl font-bold text-slate-950">
        {allocation?.total_allocated || "\$0.00"}
      </div>
      
      {/* حفظ دقیق ساختار دایره گرافیکی شما در تصویر */}
      <div className="mt-8 flex items-center justify-center">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-[conic-gradient(#2563eb_48%,#8b5cf6_70%,#10b981_86%,#f59e0b_100%)]">
          <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white">
            <span className="text-xs text-slate-500">Total</span>
            <span className="mt-1 text-xl font-bold text-slate-950">
              {allocation?.total_allocated || "\$0.00"}
            </span>
          </div>
        </div>
      </div>

      {/* رندر کاملاً داینامیک آیتم‌های زیر چارت */}
      <div className="mt-7 space-y-3">
        {allocation?.traders?.map((trader) => (
          <AllocationItem
            key={trader.id}
            color={trader.color}
            name={trader.name}
            value={trader.percentage}
          />
        ))}
      </div>
    </div>
  );
}

function AllocationItem({ color, name, value }: { color: string; name: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 text-slate-600">
        <span className={`h-3 w-3 rounded-full ${color}`} />
        <span>{name}</span>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  );
}