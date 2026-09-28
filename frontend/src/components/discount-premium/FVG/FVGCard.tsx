interface FVGCardProps {
  title: string;
  value: string;
  description: string;
  valueColor?: string;
}

export default function FVGCard({
  title,
  value,
  description,
  valueColor = "text-gray-900",
}: FVGCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-500">{title}</p>

      <p className={`mt-2 text-2xl font-bold ${valueColor}`}>{value}</p>

      <p className="mt-1 text-xs text-gray-400">{description}</p>
    </div>
  );
}
