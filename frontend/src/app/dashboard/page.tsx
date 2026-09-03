"use client";

import {FiDollarSign, FiTrendingUp, FiActivity, FiTarget} from "react-icons/fi";
import {motion} from "framer-motion";

import DashboardCard from "@/src/components/dashboard/DashboardCard";
import PortfolioChart from "@/src/components/dashboard/PortfolioChart";
import AccountAllocation from "@/src/components/dashboard/AccountAllocation";
import BrokerConnection from "@/src/components/dashboard/BrokerConnection";
import RiskControl from "@/src/components/dashboard/RiskControl";
import RecentTrades from "@/src/components/dashboard/RecentTrades";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <div className="space-y-6 p-5 lg:p-8">
          {/* Welcome */}
          <motion.div
            initial={{opacity: 0, y: -15}}
            animate={{opacity: 1, y: 0}}
          >
            <p className="max-w-2xl px-5 text-sm leading-6 text-slate-500">
              Manage your account, review your activity, monitor your portfolio
              and access your academy services from one place.
            </p>
          </motion.div>

          <div className="space-y-6 px-5">
            {/* Stats */}
            <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <DashboardCard
                title="Total Balance"
                value="$24,790.50"
                change="+12.45%"
                icon={FiDollarSign}
              />

              <DashboardCard
                title="Active Copy Trades"
                value="8"
                change="+2 this week"
                icon={FiActivity}
                iconClassName="bg-purple-50 text-purple-600"
              />

              <DashboardCard
                title="Total Profit"
                value="$4,290.30"
                change="+18.72%"
                icon={FiTrendingUp}
                iconClassName="bg-emerald-50 text-emerald-600"
              />

              <DashboardCard
                title="Win Rate"
                value="72.8%"
                change="+4.65%"
                icon={FiTarget}
              />
            </section>

            {/* Portfolio + Account Summary */}
            <section className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
              <PortfolioChart />
              <AccountAllocation />
            </section>

            {/* Broker + Risk */}
            <section className="grid gap-5 xl:grid-cols-2">
              <BrokerConnection />
              <RiskControl />
            </section>

            {/* Recent Trades */}
            <RecentTrades />
          </div>
        </div>
      </main>
    </div>
  );
}
