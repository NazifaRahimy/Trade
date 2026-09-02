"use client";

export default function RiskSettings() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-6 text-xl font-semibold text-white">Risk Settings</h3>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-slate-400">Max Daily Loss %</label>

          <input
            type="number"
            defaultValue={2}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-slate-400">Max Open Trades</label>

          <input
            type="number"
            defaultValue={5}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          />
        </div>

        <button className="w-full rounded-xl bg-blue-600 py-3 text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
}
