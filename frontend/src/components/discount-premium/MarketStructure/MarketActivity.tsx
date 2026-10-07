import SwingPoints from "../MarketStructure/SwingPoints";
import StructureHistory from "../MarketStructure/StructureHistory";

interface MarketActivityProps {
  data: any;
}

export default function MarketActivity({
  data,
}: MarketActivityProps) {
  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5">
          <p className="mt-1 text-sm text-gray-500">
            Recent market swing points
          </p>
        </div>

        <SwingPoints data={data} />
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-gray-900">
            Market Activity
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Recent market structure events
          </p>
        </div>

        <StructureHistory data={data} />
      </div>
    </section>
  );
}