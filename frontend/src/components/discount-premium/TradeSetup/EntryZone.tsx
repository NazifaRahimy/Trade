export default function EntryZone() {
  return (
    <div className="h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">Entry & Risk</h2>

      <p className="mt-1 text-sm text-gray-500">Current trade levels.</p>

      <div className="mt-5 space-y-3">
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-xs text-blue-600">Entry Zone</p>
          <p className="mt-1 text-xl font-bold text-blue-700">
            4325.10 – 4327.40
          </p>
        </div>

        <div className="rounded-xl border border-red-100 bg-red-50 p-4">
          <p className="text-xs text-red-600">Stop Loss</p>
          <p className="mt-1 text-xl font-bold text-red-600">4315.00</p>
        </div>

        <div className="rounded-xl border border-green-100 bg-green-50 p-4">
          <p className="text-xs text-green-600">Take Profit 1</p>
          <p className="mt-1 text-xl font-bold text-green-600">4335.00</p>
        </div>

        <div className="rounded-xl border border-green-100 bg-green-50 p-4">
          <p className="text-xs text-green-600">Take Profit 2</p>
          <p className="mt-1 text-xl font-bold text-green-600">4345.00</p>
        </div>

        <div className="rounded-xl border border-green-100 bg-green-50 p-4">
          <p className="text-xs text-green-600">Take Profit 3</p>
          <p className="mt-1 text-xl font-bold text-green-600">4360.00</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">Risk</p>
          <p className="mt-1 font-semibold text-red-600">10.10</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-3">
          <p className="text-xs text-gray-500">R:R</p>
          <p className="mt-1 font-semibold text-green-600">1 : 2.5</p>
        </div>
      </div>
    </div>
  );
}
