"use client";

import {useState} from "react";
import {useTranslation} from "react-i18next";
import RiskGauge from "@/src/components/dashboard/risk-control/RiskGauge";
import RiskStats from "@/src/components/dashboard/risk-control/RiskStats";
import EmergencyStop from "@/src/components/dashboard/risk-control/EmergencyStop";
import RiskSettings from "@/src/components/dashboard/risk-control/RiskSettings";

export default function RiskControlPage() {
  const {t} = useTranslation();
  // Bot status
  const [botActive, setBotActive] = useState(true);

  // Shared total risk
  const [totalRisk, setTotalRisk] = useState(20);

  const handleToggleBot = () => {
    setBotActive((prev) => !prev);
  };

  return (
    <div className="min-h-screen space-y-8 p-5 text-black lg:p-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">
          {" "}
          {t("telegramBotRiskControl.title")}
        </h1>

        <p className="mt-2 text-slate-400">
          {t("telegramBotRiskControl.description")}
        </p>
      </div>

      {/* Stats */}
      <RiskStats totalRisk={totalRisk} botActive={botActive} />

      {/* Risk + Emergency */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RiskGauge />

        <EmergencyStop botActive={botActive} onToggleBot={handleToggleBot} />
      </div>

      {/* Settings */}
      <RiskSettings totalRisk={totalRisk} setTotalRisk={setTotalRisk} />
    </div>
  );
}
