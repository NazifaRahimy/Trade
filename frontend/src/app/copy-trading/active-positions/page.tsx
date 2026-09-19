import PositionsHeader from "@/src/components/copy-trading/active-positions/PositionsHeader";
import PositionsStats from "@/src/components/copy-trading/active-positions/PositionsStats";
import ActivePositionsTable from "@/src/components/copy-trading/active-positions/ActivePositionsTable";

export default function ActivePositionsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className=" space-y-6 p-5 md:p-8 lg:p-10">
        <PositionsHeader />

        <PositionsStats />

        <ActivePositionsTable />
      </div>
    </main>
  );
}
