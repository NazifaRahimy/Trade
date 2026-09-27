"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

// 🚀 اصلاح آدرس‌های ایمپورت برای محو شدن آنی خطوط قرمز (خطوط ۵ تا ۱۰)
import api from "@/src/lib/axios";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";
import CopyTradesHeader from "@/src/components/copy-trading/my-copy-trades/CopyTradesHeader";
import CopyTradesStats from "@/src/components/copy-trading/my-copy-trades/CopyTradesStats";
import MyCopyTrader from "@/src/components/copy-trading/my-copy-trades/MyCopyTrader";

interface CopyTradesResponse {
  stats?: {
    total_trades?: number;
    winning_trades?: number;
    losing_trades?: number;
    total_profit?: number | string;
  };
  trades?: any[];
}

export default function MyCopyTradesPage() {
  const [trades, setTrades] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchCopyTrades = async () => {
    try {
      setLoading(true);
      const response = await api.get<CopyTradesResponse>(
        "/api/copy-trading/my-copy-trades/"
      );

      setTrades(response.data?.trades ?? []);
      setStats(response.data?.stats ?? {});
    } catch (error) {
      console.error("Failed to load copy trades:", error);
      setTrades([]);
      setStats({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCopyTrades();
  }, []);

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="flex min-h-screen w-full items-center justify-center gap-2 bg-slate-50 text-sm text-slate-400">
          <FiLoader size={22} className="animate-spin text-blue-600" />
          <span>Loading copied trades...</span>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen w-full bg-slate-50/50 p-4 text-slate-900 md:p-6 lg:p-8">
        <div className="mx-auto w-full max-w-[1700px] space-y-6">
          <CopyTradesHeader />

          <div className="space-y-6">
            <CopyTradesStats data={stats} />

            <MyCopyTrader trades={trades} onRefresh={fetchCopyTrades} />
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
