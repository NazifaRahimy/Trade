"use client";

import {useEffect, useState} from "react";
import {FiLoader} from "react-icons/fi";
import api from "@/src/lib/axios";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";
import CopyTradesHeader from "@/src/components/copy-trading/my-traders/CopyTradesHeader";
import CopyTradesStats from "@/src/components/copy-trading/my-traders/CopyTradesStats";
import MyCopyTrader from "@/src/components/copy-trading/my-traders/MyCopyTrader";

export default function MyTradersPage() {
  const [copyData, setCopyData] = useState<any>(null);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [availableTraders, setAvailableTraders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMyCopyPortfolio = async () => {
    try {
      const overviewRes = await api.get("/api/copy-trading/overview/");

      if (overviewRes.data) {
        setCopyData(overviewRes.data);
      }

      const tradersRes = await api.get("/api/copy-trading/my-traders/");

      if (tradersRes.data) {
        setSubscriptions(tradersRes.data);
      }

      const availableRes = await api.get("/api/traders/available/");

      if (availableRes.data) {
        setAvailableTraders(availableRes.data);
      }
    } catch (error) {
      console.error(
        "Critical: Failed to stream copy portfolio nodes:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyCopyPortfolio();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center gap-2 text-sm text-slate-400 italic bg-white">
        <FiLoader className="animate-spin text-blue-600" size={22} />
        <span>Synchronizing copy portfolio nodes...</span>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-50/50 text-slate-900 w-full max-w-[1700px] mx-auto p-4 md:p-6 lg:p-8">
        <div className="space-y-6 w-full">
          <CopyTradesHeader />

          <CopyTradesStats data={copyData?.stats} />

          <MyCopyTrader
            subscriptions={subscriptions}
            availableTraders={availableTraders}
            onRefresh={fetchMyCopyPortfolio}
          />
        </div>
      </main>
    </ProtectedRoute>
  );
}