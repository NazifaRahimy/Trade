"use client";

import {useState} from "react";
import {
  FiActivity,
  FiCheckCircle,
  FiClock,
  FiPause,
  FiPlay,
  FiStopCircle,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";
import api from "@/src/lib/axios";

interface Trader {
  trader_name: string | undefined;
  id: number | string;
  master_trader: number | string;
  name?: string;
  username?: string;
  status?: string;
  investment?: number | string;
  allocated_amount?: number | string;
  profit?: number | string;
  total_profit?: number | string;
  win_rate?: number | string;
  winRate?: number | string;
  drawdown?: number | string;
  max_drawdown?: number | string;
  profit_factor?: number | string;
  roi_display?: string;
  win_rate_display?: string;
  master_balance_display?: string;
  risk_level?: string;
  platform?: string;
  account?: string;
  account_number?: string;
  started_at?: string;
  created_at?: string;
  is_active?: boolean;
}

interface MyCopyTraderProps {
  subscriptions: Trader[];
  availableTraders: Trader[];
  onRefresh?: () => void;
}

export default function MyCopyTrader({
  subscriptions,
  availableTraders,
  onRefresh,
}: MyCopyTraderProps) {
  const [processingId, setProcessingId] = useState<string | number | null>(
    null,
  );

  const handleAction = async (
    trader: Trader,
    action: "pause" | "resume" | "stop",
  ) => {
    try {
      setProcessingId(trader.id);

      await api.post(`/api/copy-trading/my-traders/${trader.id}/${action}/`);

      onRefresh?.();
    } catch (error) {
      console.error(`Failed to ${action} copy trading:`, error);
    } finally {
      setProcessingId(null);
    }
  };

  const handleStartCopying = async (trader: Trader) => {
    try {
      setProcessingId(trader.id);

      await api.post("/api/copy-trading/subscribe/", {
        master_trader: trader.id,
      });

      await onRefresh?.();
    } catch (error: any) {
      console.error("Failed to subscribe to Master Trader:", error);

      const message =
        error?.response?.data?.detail ??
        "Failed to start copy trading.";

      window.alert(message);
    } finally {
      setProcessingId(null);
    }
  };

  const subscribedTraderIds = new Set(
    subscriptions.map((subscription) =>
      String(subscription.master_trader ?? subscription.id),
    ),
  );

  const tradersToExplore = availableTraders.filter(
    (trader) => !subscribedTraderIds.has(String(trader.id)),
  );

  return (
    <div className="space-y-8">
      {/* Available Master Traders */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Explore Master Traders
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Choose a professional trader and start copying their strategy.
            </p>
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600">
            {tradersToExplore.length} Available
          </span>
        </div>

        {tradersToExplore.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <FiUsersIcon />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              No New Traders Available
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              There are currently no additional Master Traders available to
              copy.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 xl:grid-cols-2">
            {tradersToExplore.map((trader) => {
              const name = trader.name ?? "Professional Trader";
              const isProcessing = processingId === trader.id;

              return (
                <article
                  key={trader.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <FiActivity size={21} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {name}
                        </h3>

                        {trader.risk_level && (
                          <p className="mt-1 text-xs text-slate-400">
                            Risk Level: {trader.risk_level}
                          </p>
                        )}
                      </div>
                    </div>

                    {trader.is_active !== false && (
                      <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-600">
                        Active
                      </span>
                    )}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <StatItem
                      label="Win Rate"
                      value={
                        trader.win_rate_display ??
                        `${trader.win_rate ?? 0}%`
                      }
                    />

                    <StatItem
                      label="ROI"
                      value={trader.roi_display ?? "0%"}
                      positive
                    />

                    <StatItem
                      label="Max Drawdown"
                      value={`${trader.max_drawdown ?? 0}%`}
                      negative={Number(trader.max_drawdown ?? 0) > 0}
                    />

                    <StatItem
                      label="Profit Factor"
                      value={String(trader.profit_factor ?? 0)}
                    />
                  </div>

                  {trader.master_balance_display && (
                    <div className="mt-4 rounded-xl bg-slate-50 p-3">
                      <p className="text-xs text-slate-400">
                        Master Balance
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-700">
                        {trader.master_balance_display}
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => handleStartCopying(trader)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <FiPlay size={16} />

                    {isProcessing
                      ? "Starting Copying..."
                      : "Start Copying"}
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* My Copy Traders */}
      {subscriptions.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                My Copy Traders
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage your active trader connections.
              </p>
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600">
              {subscriptions.length} Trader
              {subscriptions.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {subscriptions.map((trader) => {
              const name =
                trader.trader_name ??
                trader.name ??
                "Professional Trader";

              const investment =
                trader.investment ?? trader.allocated_amount ?? 0;

              const profit = trader.profit ?? trader.total_profit ?? 0;

              const winRate = trader.win_rate ?? trader.winRate ?? 0;

              const drawdown = trader.drawdown ?? 0;

              const status = (trader.status ?? "active").toLowerCase();

              const isPaused = status === "paused";

              const isStopped =
                status === "stopped" || status === "inactive";

              const isProcessing = processingId === trader.id;

              return (
                <article
                  key={trader.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <FiActivity size={21} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {name}
                        </h3>

                        {trader.username && (
                          <p className="mt-1 text-xs text-slate-400">
                            @{trader.username}
                          </p>
                        )}
                      </div>
                    </div>

                    <StatusBadge status={status} />
                  </div>

                  {/* Account */}
                  <div className="mt-5 rounded-xl bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-400">
                          Trading Account
                        </p>

                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {trader.platform ?? "MetaTrader 5"}
                        </p>
                      </div>

                      <FiCheckCircle
                        size={19}
                        className="text-emerald-500"
                      />
                    </div>

                    {(trader.account || trader.account_number) && (
                      <p className="mt-2 text-xs text-slate-400">
                        Account:{" "}
                        {trader.account ?? trader.account_number}
                      </p>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <StatItem
                      label="Investment"
                      value={`$${Number(investment).toLocaleString()}`}
                    />

                    <StatItem
                      label="Profit"
                      value={`$${Number(profit).toLocaleString()}`}
                      positive={Number(profit) >= 0}
                    />

                    <StatItem
                      label="Win Rate"
                      value={`${winRate}%`}
                    />

                    <StatItem
                      label="Drawdown"
                      value={`${drawdown}%`}
                      negative={Number(drawdown) > 0}
                    />
                  </div>

                  {/* Started */}
                  {(trader.started_at || trader.created_at) && (
                    <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                      <FiClock size={14} />

                      Started{" "}
                      {formatDate(
                        trader.started_at ?? trader.created_at,
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  {!isStopped && (
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {isPaused ? (
                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() =>
                            handleAction(trader, "resume")
                          }
                          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <FiPlay size={16} />

                          {isProcessing
                            ? "Processing..."
                            : "Resume Copying"}
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled={isProcessing}
                          onClick={() =>
                            handleAction(trader, "pause")
                          }
                          className="flex items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          <FiPause size={16} />

                          {isProcessing
                            ? "Processing..."
                            : "Pause Copying"}
                        </button>
                      )}

                      <button
                        type="button"
                        disabled={isProcessing}
                        onClick={() =>
                          handleAction(trader, "stop")
                        }
                        className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <FiStopCircle size={16} />
                        Stop Copying
                      </button>
                    </div>
                  )}

                  {isStopped && (
                    <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-500">
                      <FiStopCircle size={16} />
                      Copying stopped
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function StatItem({
  label,
  value,
  positive,
  negative,
}: {
  label: string;
  value: string;
  positive?: boolean;
  negative?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
      <p className="text-xs text-slate-400">{label}</p>

      <div className="mt-1 flex items-center gap-1">
        {positive && (
          <FiTrendingUp
            size={14}
            className="text-emerald-500"
          />
        )}

        {negative && (
          <FiTrendingDown
            size={14}
            className="text-red-500"
          />
        )}

        <p
          className={`text-sm font-semibold ${
            positive
              ? "text-emerald-600"
              : negative
                ? "text-red-600"
                : "text-slate-700"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function StatusBadge({status}: {status: string}) {
  const isActive = status === "active";
  const isPaused = status === "paused";

  if (isActive) {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-600">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Active
      </span>
    );
  }

  if (isPaused) {
    return (
      <span className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-600">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        Paused
      </span>
    );
  }

  return (
    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
      Stopped
    </span>
  );
}

function formatDate(date?: string) {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString();
}

function FiUsersIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}