"use client";

import {useState} from "react";

export default function BrokerConnect() {
  const [server, setServer] = useState("MetaQuotes-Demo");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="border-b border-gray-100 pb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              MT5 Account Connection
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Connect your MetaTrader 5 account to use the trading robot.
            </p>
          </div>

          <span className="w-fit rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-500">
            NOT CONNECTED
          </span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* Server */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            MT5 Server
          </label>

          <select
            value={server}
            onChange={(e) => setServer(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500"
          >
            <option>MetaQuotes-Demo</option>
            <option>MetaQuotes-Live</option>
            <option>ICMarkets-Demo</option>
            <option>XM-Demo</option>
          </select>
        </div>

        {/* Login */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            MT5 Login
          </label>

          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Enter account login"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-xl border border-gray-100 bg-gray-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">
            Connection Status
          </p>

          <div className="mt-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gray-400" />

            <span className="text-sm text-gray-500">
              MT5 account is not connected
            </span>
          </div>
        </div>

        <button
          type="button"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Connect MT5
        </button>
      </div>
    </section>
  );
}
