import SubscriptionHeader from "@/src/components/subscription/SubscriptionHeader";
import CurrentSubscription from "@/src/components/subscription/CurrentSubscription";
import SubscriptionProgress from "@/src/components/subscription/SubscriptionProgress";
import SubscriptionPlans from "@/src/components/subscription/SubscriptionPlans";

export default function SubscriptionPage() {
  return (
    <main className="mx-auto w-full max-w-[1400px] px-5 py-7 md:px-8 lg:px-10">
      <SubscriptionHeader />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
        <CurrentSubscription />

        <SubscriptionProgress />
      </div>

      <SubscriptionPlans />
    </main>
  );
}
