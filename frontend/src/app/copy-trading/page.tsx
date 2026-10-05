"use client";

import {useEffect, useState} from "react";
import api from "@/src/lib/axios";
import OverviewHeader from "@/src/components/copy-trading/overview/OverviewHeader";
import OverviewStats from "@/src/components/copy-trading/overview/OverviewStats";
import PortfolioGrowth from "@/src/components/copy-trading/overview/PortfolioGrowth";
import CopyAllocation from "@/src/components/copy-trading/overview/CopyAllocation";
import ActiveCopyTraders from "@/src/components/copy-trading/overview/ActiveCopyTraders";

type CopyTradingData = {
  stats: {
    total_balance: string;
    copy_trading_balance: string;
    total_profit: string;
    active_traders: number;
    win_rate: string;
  };

  growth_chart: {
    date: string;
    balance: number;
  }[];

  allocation: {
    total_allocated: string;
    traders: {
      id: number;
      name: string;
      percentage: string;
      color: string;
    }[];
  };

  traders: {
    id: number;
    name: string;
    status: string;
    pair: string;
    investment: string;
    profit: string;
    return_pct: string;
    win_rate: string;
    active_positions: number;
    copy_ratio: string;
  }[];
};

export default function CopyTradingPage() {
  const [data, setData] = useState<CopyTradingData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const response = await api.get("/api/copy-trading/overview/");

        const result: CopyTradingData = response.data;

        setData(result);
      } catch (err) {
        console.error("Copy Trading Overview Error:", err);
        setError(true);
      }
    };

    fetchOverview();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-white p-8 text-center text-red-500">
        Failed to load copy trading data.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-white p-8 text-center text-slate-400">
        Loading copy trading data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <div className="space-y-6 p-5 lg:p-8">
          {/* Header */}
          <OverviewHeader />

          {/* Stats */}
          <OverviewStats statsData={data.stats} />

          {/* Performance + Allocation */}
          <section className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
            <PortfolioGrowth />
            <CopyAllocation allocation={data.allocation} />
          </section>

          {/* Active Copy Traders */}
          <ActiveCopyTraders tradersList={data.traders} />
        </div>
      </main>
    </div>
  );
}
