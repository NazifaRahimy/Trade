import TradingSettings from "@/src/components/discount-premium/Settings/TradingSettings";
import StrategySettings from "@/src/components/discount-premium/Settings/StrategySettings";
import TakeProfitSettings from "@/src/components/discount-premium/Settings/TakeProfitSettings";
import NotificationSettings from "@/src/components/discount-premium/Settings/NotificationSettings";
import AppearanceSettings from "@/src/components/discount-premium/Settings/AppearanceSettings";
import BrokerConnect from "@/src/components/discount-premium/Settings/BrokerConnect";
import RiskSettings from "@/src/components/discount-premium/Settings/RiskSettings";

export default function SettingsPage() {
  return (
    <div className=" space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Settings
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Configure trading, strategy, take profit and notification
            preferences.
          </p>
        </div>

        <span className="w-fit rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
          STRATEGY SETTINGS
        </span>
      </div>

      <BrokerConnect />

      <RiskSettings />
      <TradingSettings />
      <StrategySettings />
      <TakeProfitSettings />
      <NotificationSettings />
      <AppearanceSettings />

      {/* Save Button */}
      <div className="flex justify-end border-t border-gray-100 pt-2">
        <button
          type="button"
          className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
