import SetupHistoryTable from "@/src/components/discount-premium/History/SetupHistoryTable";
import HistoryFilters from "@/src/components/discount-premium/History/HistoryFilters";
import HistoryStats from "@/src/components/discount-premium/History/HistoryStats";
import HistoryDetails from "@/src/components/discount-premium/History/HistoryDetails";

export default function HistoryPage() {
  return (
    <div className=" space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            History
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Review previous trading setups, signals and their results.
          </p>
        </div>

        <span className="w-fit rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
          SETUP HISTORY
        </span>
      </div>

      {/* Statistics */}
      <HistoryStats />

      {/* Filters */}
      <HistoryFilters />

      {/* History Table */}
      <SetupHistoryTable />

      {/* Selected Setup Details */}
      <HistoryDetails />
    </div>
  );
}
