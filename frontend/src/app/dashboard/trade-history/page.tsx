"use client";

import { useEffect, useState } from "react";

import TradeHistoryHeader from "@/src/components/dashboard/trade-history/TradeHistoryHeader";
import TradeStats from "@/src/components/dashboard/trade-history/TradeStats";
import TradeFilters from "@/src/components/dashboard/trade-history/TradeFilters";
import TradeTable from "@/src/components/dashboard/trade-history/TradeTable";
import api from "@/src/lib/axios";

type Trade = {
  ticket: number;
  symbol: string;
  order_type: string;
  volume: number;
  entry_price: number;
  profit: number;
  timestamp: string;
  status: string;
};

type Summary = {
  total_trades: number;
  winning_trades: number;
  losing_trades: number;
  win_rate: string;
  total_profit: string;
  total_loss: string;
  trading_volume: number;
};

export default function TradeHistoryPage() {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [days, setDays] = useState("30");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");

  useEffect(() => {
    const fetchTradeHistory = async () => {
      try {
        setLoading(true);

        const response = await api.get("/api/stats/trade-history/", {
          params: {
            days,
            type,
            status,
            search,
          },
        });

        setTrades(response.data.recent_trades || []);
        setSummary(response.data.summary || null);
      } catch (error) {
        console.error("Failed to load trade history:", error);
        setTrades([]);
        setSummary(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTradeHistory();
  }, [days, type, status, search]);

  return (
<main className="min-h-screen text-black">
  <div className="px-5 py-7 md:px-8 lg:px-10">
    <TradeHistoryHeader />

    <section>
      <TradeTable />
    </section>
  </div>
</main>
  );
}