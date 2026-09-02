import BrokerHeader from "@/src/components/dashboard/broker/BrokerHeader";
import BrokerConnectionCard from "@/src/components/dashboard/broker/BrokerConnectionCard";
import BrokerForm from "@/src/components/dashboard/broker/BrokerForm";
import SupportedBrokers from "@/src/components/dashboard/broker/SupportedBrokers";
import SecurityNotice from "@/src/components/dashboard/broker/SecurityNotice";

export default function BrokerPage() {
  return (
    <main className="min-h-screen bg-[#06101d] text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-7 md:px-8 lg:px-10 ">
        <BrokerHeader />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.9fr)]">
          {/* Left */}
          <div className="space-y-6">
            <BrokerConnectionCard />
            <BrokerForm />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <SupportedBrokers />
            <SecurityNotice />
          </div>
        </div>
      </div>
    </main>
  );
}
