"use client";

import {useState} from "react";

const notifications = [
  {
    id: "newSetup",
    title: "New Setup Alert",
    description: "Notify when a new valid trading setup is detected.",
  },
  {
    id: "entry",
    title: "Entry Alert",
    description: "Notify when price reaches the confirmed entry zone.",
  },
  {
    id: "tp",
    title: "TP Hit Alert",
    description: "Notify when a take profit level is reached.",
  },
  {
    id: "sl",
    title: "SL Hit Alert",
    description: "Notify when the stop loss level is reached.",
  },
];

export default function NotificationSettings() {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    newSetup: true,
    entry: true,
    tp: true,
    sl: true,
  });

  const toggle = (id: string) => {
    setEnabled((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>

        <p className="mt-1 text-sm text-gray-500">
          Choose which trading events should trigger notifications.
        </p>
      </div>

      <div className="mt-2 divide-y divide-gray-100">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center justify-between gap-4 py-4"
          >
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                {notification.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {notification.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggle(notification.id)}
              aria-label={`Toggle ${notification.title}`}
              className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                enabled[notification.id] ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                  enabled[notification.id] ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
