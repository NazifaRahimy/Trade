import HistoryHeader from "@/src/components/copy-trading/history/HistoryHeader";
import HistoryTable from "@/src/components/copy-trading/history/HistoryTable";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-[1400px] space-y-6 p-5 md:p-8 lg:p-10">
        <HistoryHeader />

        <HistoryTable />
      </div>
    </main>
  );
}
