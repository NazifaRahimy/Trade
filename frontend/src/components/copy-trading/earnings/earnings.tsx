"use client";

import { useEffect, useState } from "react";
import { FiLoader, FiDollarSign, FiArrowUpRight } from "react-icons/fi";
import api from "@/src/lib/axios";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

export default function MasterEarningsPage() {
  const [balance, setBalance] = useState("0.00");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // دریافت لایو موجودی سودهای جمع‌شده مسترتریدر از بک‌اَند
    api.get("/api/copy-trading/overview/")
      .then(res => {
        if (res.data && res.data.stats) {
          setBalance(res.data.stats.total_profit || "\$0.00");
        }
      })
      .catch(err => console.error(err))
      .finally(() => setFetching(false));
  }, []);

  const handleWithdrawRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAmount || !walletAddress) return;

    try {
      setLoading(true);
      const response = await api.post("/api/billing/payouts/request/", {
        amount: withdrawAmount,
        wallet_address: walletAddress
      });
      alert(`✅ Withdrawal Requested: ${response.data.message}`);
      setWithdrawAmount("");
      setWalletAddress("");
    } catch (error) {
      alert("❌ Request Rejected: Insufficient balance or invalid wallet sequence.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex h-screen w-full items-center justify-center gap-2 text-xs text-slate-400 italic bg-white">
        <FiLoader className="animate-spin text-blue-600" size={18} />
        <span>Loading master allocation metrics...</span>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-50/50 p-6  space-y-6 text-slate-900">
        
        {/* کارت نمایش کل درآمد مستر تریدر */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-400 font-semibold block">Your Master Earnings</span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">{balance}</h2>
          </div>
          <div className="h-11 w-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
            <FiDollarSign size={20} />
          </div>
        </div>

        {/* فرم ثبت آدرس ولت تتر مستر تریدر جهت واریز سهم ۱۵ درصدی */}
        <form onSubmit={handleWithdrawRequest} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-800">Request Withdrawal</h3>
          <p className="text-xs text-slate-400">Withdraw your performance fees directly to your personal TRC20 wallet.</p>
          
          <div>
            <label className="text-xs font-semibold text-slate-500 block mb-1">Amount (USDT)</label>
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="e.g. 150"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:bg-white focus:border-blue-500 font-mono"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500 block mb-1">USDT TRC-20 Address</label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="T..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:bg-white focus:border-blue-500 font-mono"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-xl py-3 text-xs font-bold shadow-sm hover:bg-blue-700 transition flex items-center justify-center gap-1"
          >
            {loading ? <FiLoader className="animate-spin" /> : <FiArrowUpRight />}
            Submit Withdrawal Request
          </button>
        </form>
      </main>
    </ProtectedRoute>
  );
}
