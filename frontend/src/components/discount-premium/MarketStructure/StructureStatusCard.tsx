type StructureStatusCardProps = {
  timeframe: string;
  title: string;
  trend: string;
  lastStructure: string;
  previousStructure: string;
  structure: string;
  strength: string;
  confirmation: string;
};

export default function StructureStatusCard({
  timeframe,
  title,
  trend,
  lastStructure,
  previousStructure,
  structure,
  strength,
  confirmation,
}: StructureStatusCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {" "}
      <div className="flex items-start justify-between">
        {" "}
        <div>
          {" "}
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {timeframe} Structure{" "}
          </p>
          <h2 className="mt-1 text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        <span className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">
          {trend}
        </span>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Trend</p>
          <p className="mt-1 font-bold text-green-600">{trend}</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Structure</p>
          <p className="mt-1 font-bold text-purple-600">{structure}</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Last Structure</p>
          <p className="mt-1 font-bold text-gray-900">{lastStructure}</p>
        </div>

        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-500">Previous</p>
          <p className="mt-1 font-bold text-gray-900">{previousStructure}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-gray-500">Structure Strength</p>
          <p className="mt-1 text-sm font-semibold text-gray-800">{strength}</p>
        </div>

        <div className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600">
          {confirmation}
        </div>
      </div>
    </div>
  );
}
