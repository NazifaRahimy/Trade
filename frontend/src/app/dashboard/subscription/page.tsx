import SubscriptionHeader from "@/src/components/dashboard/subscription/SubscriptionHeader";
import CurrentSubscription from "@/src/components/dashboard/subscription/CurrentSubscription";
import SubscriptionProgress from "@/src/components/dashboard/subscription/SubscriptionProgress";
import SubscriptionPlans from "@/src/components/dashboard/subscription/SubscriptionPlans";

// export default function SubscriptionPage() {
//   return (
//     <main className="min-h-screen w-full overflow-x-hidden bg-slate-950 p-5 text-white  lg:w-[calc(100%-16rem)] lg:p-8">
//       <div className="mx-auto w-full max-w-[1400px] space-y-8">
//         <SubscriptionHeader />

//         <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.8fr)]">
//           <CurrentSubscription />

//           <SubscriptionProgress />
//         </div>

//         <SubscriptionPlans />
//       </div>
//     </main>
//   );
// }
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
