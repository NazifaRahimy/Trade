"use client";

import React from "react";
import { FiActivity, FiClock, FiCheckCircle } from "react-icons/fi";

// 🟢 تبدیل فعالیت‌های ثابت قدیمی به مانیتور زنده رویدادهای واقعی متاتریدر ۵
export default function RecentActivity({ events }: { events: any[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
        <FiClock className="text-gray-400" size={19} />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <p className="text-xs text-gray-500">Latest strategy and trading activity logs.</p>
        </div>
      </div>

      <div className="mt-5 divide-y divide-gray-100 max-h-[280px] overflow-y-auto">
        {events.length > 0 ? (
          events.map((event: any, index: number) => (
            <div key={index} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
              <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                <FiActivity size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  New {event.event_type} breakout signal detected
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Direction: {event.direction} at price \${parseFloat(event.breakout_price).toFixed(2)}
                </p>
              </div>
              <span className="text-xs text-gray-400 font-mono">
                {new Date(event.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-xs text-gray-400 font-sans">
            No recent structural market breakout logs recorded yet.
          </div>
        )}
      </div>
    </div>
  );
}
