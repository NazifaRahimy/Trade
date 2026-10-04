// 🟢 کدهای اصلی و استایل جدول شما ۱۰۰٪ حفظ شده، فقط ورودی تابع داینامیک می‌شود:
export default function StructureHistory({ data }: { data: any }) {
  // واکشی آرایه رویدادهای شکست ساختار بازار از دیتای زنده بک‌اَند
  const events = data?.breakout_events || [];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Structure History</h3>
        <p className="text-sm text-gray-500">Recent Break of Structure (BOS) and Change of Character (CHoCH) events</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Direction</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {events.length > 0 ? (
              events.map((event: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-semibold">
                    <span className={`rounded-md px-2 py-1 text-xs ${
                      event.event_type === "CHOCH" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"
                    }`}>
                      {event.event_type}
                    </span>
                  </td>
                  <td className={`px-4 py-3 font-medium ${
                    event.direction === "BULLISH" ? "text-emerald-600" : "text-rose-600"
                  }`}>
                    {event.direction}
                  </td>
                  <td className="px-4 py-3 font-mono font-bold text-gray-900">
                    \${parseFloat(event.breakout_price).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-gray-400">
                    {new Date(event.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-400">
                  No structural breakout events logged for XAUUSD yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
