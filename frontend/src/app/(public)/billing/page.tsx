import BillingHeader from "@/src/components/billing/BillingHeader";
import BillingStats from "@/src/components/billing/BillingStats";
import RecentTransactions from "@/src/components/billing/RecentTransactions";

export default function BillingPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px]">
        <BillingHeader />

        <BillingStats />

        <RecentTransactions />
      </div>
    </main>
  );
}
