"use client";

import {FiActivity, FiCheckCircle, FiClock, FiTrendingUp} from "react-icons/fi";

const activities = [
  {
    time: "10:42",
    title: "New XAUUSD BUY signal detected",
    description: "Discount Reversal · 87% confidence",
    icon: FiTrendingUp,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    time: "10:38",
    title: "XAUUSD trade opened",
    description: "BUY at 4325.10",
    icon: FiActivity,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    time: "10:31",
    title: "EURUSD signal detected",
    description: "BOS + FVG · 79% confidence",
    icon: FiTrendingUp,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    time: "10:15",
    title: "Strategy confirmation completed",
    description: "6/6 strategy conditions confirmed",
    icon: FiCheckCircle,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-700">
          <FiClock size={19} />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Activity
          </h2>

          <p className="text-sm text-gray-500">
            Latest strategy and trading activity
          </p>
        </div>
      </div>

      <div className="mt-6 divide-y divide-gray-100">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={`${activity.time}-${activity.title}`}
              className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${activity.iconBg} ${activity.iconColor}`}
              >
                <Icon size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {activity.description}
                </p>
              </div>

              <span className="shrink-0 text-xs font-medium text-gray-400">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
