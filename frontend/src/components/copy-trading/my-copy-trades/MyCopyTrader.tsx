"use client";

import {useState} from "react";
import {FiActivity, FiPause, FiPlay, FiLoader} from "react-icons/fi";
import api from "@/src/lib/axios";
import {useTranslation} from "react-i18next";

type TradeItem = {
  id: number;
  symbol: string;
  type: string;
  volume: number;
  entry_price: number;
  exit_price: number | null;
  profit: number;
  status: string;
};

interface MyCopyTraderProps {
  trades: TradeItem[]; // دریافت مستقیم معاملات زنده دیتابیس
  onRefresh: () => void;
}

export default function MyCopyTrader({trades, onRefresh}: MyCopyTraderProps) {
  const {t} = useTranslation();
  const [processingId, setProcessingId] = useState<number | null>(null);

  // 📡 شلیک سیگنال متوقف یا روشن کردن کپی‌ترید به بک‌اَند
  const handleToggleCopyStatus = async (
    tradeId: number,
    currentStatus: string,
  ) => {
    const isCurrentlyActive =
      currentStatus.toLowerCase() === "open" ||
      currentStatus.toLowerCase() === "active";
    const action = isCurrentlyActive ? "pause" : "resume";

    try {
      setProcessingId(tradeId);
      await api.post(`/api/copy-trading/my-traders/${tradeId}/${action}/`);
      onRefresh(); // به‌روزرسانی آنی فرانت‌اَند پس از اعمال تغییر وضعیت در بک‌اَند
    } catch (error) {
      console.error(`Failed to execute ${action} on live order matrix:`, error);
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm mt-6">
      <div className="border-b border-slate-100 p-5">
        <h2 className="text-base font-bold text-slate-900">
          {t("myCopyTrading.copiedTradesPortfolio")}
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          {t("myCopyTrading.terminalSyncLogs")}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-50">
              <th className="p-4 pl-6"> {t("myCopyTrading.symbol")}</th>
              {/* 🚀 اضافه شدن ستون کنترلرها */}
              <th className="p-4">{t("myCopyTrading.type")}</th>

              <th className="p-4">{t("myCopyTrading.volume")}</th>

              <th className="p-4">{t("myCopyTrading.entry")}</th>

              <th className="p-4">{t("myCopyTrading.exit")}</th>

              <th className="p-4">{t("myCopyTrading.pnl")}</th>

              <th className="p-4">{t("myCopyTrading.status")}</th>

              <th className="p-4 pr-6 text-center">
                {t("copyTrading.actions")}
              </th>
            </tr>
          </thead>
          <tbody className="text-xs divide-y divide-slate-50 font-medium">
            {!trades || trades.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="p-8 text-center text-slate-400 italic"
                >
                  {t("myCopyTrading.noCopiedTrades")}
                </td>
              </tr>
            ) : (
              trades.map((trade) => {
                const isBuy = trade.type === "BUY" || trade.type === "buy";
                const isClosed =
                  trade.status === "CLOSED" || trade.status === "closed";
                const isProfit = trade.profit >= 0;
                const isTradeActive = !isClosed; // اگر معامله بسته نشده باشد یعنی فعال است

                return (
                  <tr
                    key={trade.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="p-4 pl-6 font-bold text-slate-900">
                      {trade.symbol}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-0.5 rounded-lg text-[10px] font-bold ${
                          isBuy
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {isBuy
                          ? `↑ ${t("copyTrading.buy")}`
                          : `↓ ${t("copyTrading.sell")}`}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-slate-600">
                      {trade.volume}
                    </td>
                    <td className="p-4 font-mono text-slate-600">
                      \${trade.entry_price.toFixed(2)}
                    </td>
                    <td className="p-4 font-mono text-slate-400">
                      {trade.exit_price
                        ? `$` + trade.exit_price.toFixed(2)
                        : "—"}
                    </td>
                    <td
                      className={`p-4 font-bold ${isProfit ? "text-emerald-600" : "text-red-600"}`}
                    >
                      {isProfit ? "+" : ""}\${trade.profit.toFixed(2)}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          isClosed
                            ? "bg-slate-100 text-slate-600"
                            : "bg-blue-50 text-blue-600 animate-pulse"
                        }`}
                      >
                        {trade.status}
                      </span>
                    </td>

                    {/* 🟩 رندر خودکار دکمه‌های کنترل لایو کپی‌ترید در انتهای جدول */}
                    <td className="p-4 pr-6 text-center">
                      <button
                        onClick={() =>
                          handleToggleCopyStatus(trade.id, trade.status)
                        }
                        disabled={processingId !== null}
                        className={`inline-flex h-7 items-center gap-1.5 rounded-xl px-3 text-[11px] font-bold text-white transition ${
                          isTradeActive
                            ? "bg-orange-500 hover:bg-orange-600"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        {processingId === trade.id ? (
                          <FiLoader className="animate-spin" size={12} />
                        ) : isTradeActive ? (
                          <FiPause size={12} />
                        ) : (
                          <FiPlay size={12} />
                        )}
                        <span>
                          {" "}
                          {isTradeActive
                            ? t("copyTrading.pause")
                            : t("copyTrading.start")}
                        </span>
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
