import RiskGauge from "@/src/components/dashboard/risk-control/RiskGauge";
import RiskStats from "@/src/components/dashboard/risk-control/RiskStats";
import EmergencyStop from "@/src/components/dashboard/risk-control/EmergencyStop";
import RiskSettings from "@/src/components/dashboard/risk-control/RiskSettings";

export default function RiskControlPage() {
  return (
    <div className="space-y-8  p-5 lg:p-8 min-h-screen  text-black">
      <div>
        <h1 className="text-3xl font-bold text-white">Risk Control</h1>

        <p className="mt-2 text-slate-400">
          Manage account protection and trading risk.
        </p>
      </div>

      <RiskStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <RiskGauge />
        <EmergencyStop />
      </div>

      <RiskSettings />
    </div>
  );
}
