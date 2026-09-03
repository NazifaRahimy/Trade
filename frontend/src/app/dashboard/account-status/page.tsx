"use client";

import {motion} from "framer-motion";
import AccountOverview from "@/src/components/dashboard/AccountStats/AccountOverview";
import BalanceCard from "@/src/components/dashboard/AccountStats/BalanceCard";
import PerformanceCard from "@/src/components/dashboard/AccountStats/PerformanceCard";
import TradingStats from "@/src/components/dashboard/AccountStats/TradingStats";
import AccountInfo from "@/src/components/dashboard/AccountStats/AccountInfo";

export default function AccountStatsPage() {
  return (
    <div className="min-h-screen text-black">
      <main>
        <div className="space-y-6 p-5 lg:p-8">
          {/* Page Header */}
          <motion.div
            initial={{opacity: 0, y: -15}}
            animate={{opacity: 1, y: 0}}
          >
            <p className="text-sm text-blue-400">Account Overview</p>

            <h1 className="mt-1 text-2xl font-bold text-white lg:text-3xl">
              Account Statistics
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Monitor your account balance, trading performance, risk profile
              and overall account activity.
            </p>
          </motion.div>

          {/* Overview Cards */}
          <AccountOverview />

          {/* Balance + Performance */}
          <section className="grid gap-5 xl:grid-cols-2">
            <BalanceCard />
            <PerformanceCard />
          </section>

          {/* Trading Statistics */}
          <TradingStats />

          {/* Account Information */}
          <AccountInfo />
        </div>
      </main>
    </div>
  );
}
