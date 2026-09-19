import BrokerHeader from "@/src/components/copy-trading/broker-connections/BrokerHeader";
import BrokerConnectionCard from "@/src/components/copy-trading/broker-connections/BrokerConnectionCard";
import BrokerForm from "@/src/components/copy-trading/broker-connections/BrokerForm";
import SupportedBrokers from "@/src/components/copy-trading/broker-connections/SupportedBrokers";
import SecurityNotice from "@/src/components/copy-trading/broker-connections/SecurityNotice";

export default function BrokerConnectionsPage() {
  return (
    <main className="min-h-screen text-black">
      <div className=" px-5 py-7 md:px-8 lg:px-10">
        <BrokerHeader />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.9fr)]">
          <div className="space-y-6">
            <BrokerConnectionCard />
            <BrokerForm />
          </div>

          <div className="space-y-6">
            <SupportedBrokers />
            <SecurityNotice />
          </div>
        </div>
      </div>
    </main>
  );
}
