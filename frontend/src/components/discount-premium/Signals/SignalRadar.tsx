// 🟢 لایو کردن محاسبات چهار کارت رادار سیگنال‌ها با حفظ کامل استایل و کلاس‌های شما
export default function SignalRadar({ signals }: { signals: any[] }) {
  const pendingCount = signals.length;
  const strongCount = signals.filter(s => s.confidence >= 80).length;
  const bullishCount = signals.filter(s => s.direction === "BUY").length;
  const bearishCount = signals.filter(s => s.direction === "SELL").length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {/* کارت اول: Pending Signals */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Pending Signals</p>
        <h3 className="text-2xl font-bold text-gray-900 font-mono">{pendingCount}</h3>
        <p className="mt-1 text-xs text-gray-400">Awaiting user confirmation</p>
      </div>

      {/* کارت دوم: Strong Signals */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Strong Signals</p>
        <h3 className="text-2xl font-bold text-gray-900 font-mono">{strongCount}</h3>
        <p className="mt-1 text-xs text-gray-400">Confidence limits above 80%</p>
      </div>

      {/* کارت سوم: Bullish */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Bullish</p>
        <h3 className="text-2xl font-bold text-emerald-600 font-mono">{bullishCount}</h3>
        <p className="mt-1 text-xs text-gray-400">Buy expansion opportunities</p>
      </div>

      {/* کارت چهارم: Bearish */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">Bearish</p>
        <h3 className="text-2xl font-bold text-rose-600 font-mono">{bearishCount}</h3>
        <p className="mt-1 text-xs text-gray-400">Sell distribution opportunities</p>
      </div>
    </div>
  );
}
