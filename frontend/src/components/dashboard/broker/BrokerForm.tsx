"use client";

import {FormEvent, useState} from "react";
import {motion} from "framer-motion";
import {
  FiEye,
  FiEyeOff,
  FiKey,
  FiLock,
  FiServer,
  FiUser,
  FiWifi,
} from "react-icons/fi";

export default function BrokerForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Backend connection will be added later.
    console.log("Broker form submitted");
  };

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.1}}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/10 md:p-6"
    >
      <div className="mb-6">
        <h2 className="text-base font-semibold text-white">Broker Account</h2>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          Enter your broker account credentials to establish a connection.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Broker */}
        <div>
          <label
            htmlFor="broker"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Broker
          </label>

          <div className="relative">
            <FiWifi
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              size={17}
            />

            <select
              id="broker"
              defaultValue="ic-markets"
              className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-950/70 px-10 py-3 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            >
              <option value="ic-markets">IC Markets</option>
              <option value="exness">Exness</option>
              <option value="xm">XM</option>
              <option value="pepperstone">Pepperstone</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Account Type */}
        <div>
          <label
            htmlFor="accountType"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Account Type
          </label>

          <select
            id="accountType"
            defaultValue="live"
            className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
          >
            <option value="live">Live Account</option>
            <option value="demo">Demo Account</option>
          </select>
        </div>

        {/* Account ID + Server */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="accountId"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Account ID / Login
            </label>

            <div className="relative">
              <FiUser
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                size={17}
              />

              <input
                id="accountId"
                type="text"
                placeholder="1234567"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-10 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="server"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Server
            </label>

            <div className="relative">
              <FiServer
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                size={17}
              />

              <input
                id="server"
                type="text"
                placeholder="ICMarkets-Live"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-10 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Password
          </label>

          <div className="relative">
            <FiLock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              size={17}
            />

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-10 py-3 pr-11 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-300"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
            </button>
          </div>
        </div>

        {/* API Key */}
        <div>
          <label
            htmlFor="apiKey"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            API Key
            <span className="ml-2 text-xs font-normal text-slate-600">
              Optional
            </span>
          </label>

          <div className="relative">
            <FiKey
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              size={17}
            />

            <input
              id="apiKey"
              type="text"
              placeholder="Enter API key if required"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-10 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            />
          </div>
        </div>

        {/* Remember */}
        <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">
          <input
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500"
          />

          <span>Remember this account</span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-500 active:scale-[0.99]"
        >
          <FiWifi size={17} />
          Connect Broker
        </button>
      </form>
    </motion.div>
  );
}
