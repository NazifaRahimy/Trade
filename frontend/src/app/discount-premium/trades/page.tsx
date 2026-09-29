import TradesHeader from "@/src/components/discount-premium/Trades/TradesHeader";
import TradeStats from "@/src/components/discount-premium/Trades/TradeStats";
import OpenTrades from "@/src/components/discount-premium/Trades/OpenTrades";
import TradeHistory from "@/src/components/discount-premium/Trades/TradeHistory";

export default function TradesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TradesHeader />

      <TradeStats />

      <OpenTrades />

      <TradeHistory />
    </div>
  );
}
