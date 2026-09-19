import CopySettingsHeader from "@/src/components/copy-trading/copy-settings/CopySettingsHeader";
import CopySettingsPanel from "@/src/components/copy-trading/copy-settings/CopySettingsPanel";
import CopySettingsInfo from "@/src/components/copy-trading/copy-settings/CopySettingsInfo";

export default function CopySettingsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className=" space-y-6 p-5 md:p-8 lg:p-10">
        <CopySettingsHeader />

        <CopySettingsPanel />

        <CopySettingsInfo />
      </div>
    </main>
  );
}
