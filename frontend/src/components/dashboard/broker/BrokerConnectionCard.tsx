"use client";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {
  FiCheckCircle,
  FiRefreshCw,
  FiServer,
  FiUser,
  FiInfo,
  FiLoader,
} from "react-icons/fi";
// 🚀 ایمپورت کردن سرویس‌های واقعی پلتفرم شما
// 🟢 Absolute import format ensures Turbopack tracks the file smoothly
import {getDashboardStats, toggleBotStatus} from "@/src/lib/api";

export default function BrokerConnectionCard() {
  const [connection, setConnection] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [testing, setTesting] = useState(false);
  const {t} = useTranslation();

  // 📡 فچ کردن آنلاین اطلاعات حساب جاری کاربر از دیتابیس جنگو
  const fetchCurrentConnection = async () => {
    try {
      const data = await getDashboardStats();
      // بررسی اینکه آیا کاربر قبلاً حسابی را متصل کرده است یا خیر
      if (data && data.is_active !== undefined) {
        setConnection(data);
      } else {
        setConnection(null);
      }
    } catch (error) {
      console.error("Error fetching current connection:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentConnection();
  }, []);

  // ⚡ دکمه تست اتصال (Test Connection)
  const handleTestConnection = async () => {
    try {
      setTesting(true);
      await getDashboardStats();
      alert(t("telegramBotBrokerForm.connectionActive"));
    } catch (err) {
      alert(t("telegramBotBrokerForm.connectionError"));
    } finally {
      setTesting(false);
    }
  };

  // 🔴 دکمه قطع اتصال (Disconnect Account)
  const handleDisconnect = async () => {
    if (!confirm(t("telegramBotBrokerForm.disconnectConfirmation"))) return;
    try {
      await toggleBotStatus(false);
      alert(t("telegramBotBrokerForm.brokerDeactivated"));
      await fetchCurrentConnection(); // رفرش آنی کارت
    } catch (err) {
      alert(t("telegramBotBrokerForm.disconnectError"));
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-sm text-slate-400 italic flex items-center justify-center gap-2 h-[240px]">
        <FiLoader className="animate-spin text-blue-600" size={18} />
        <span>{t("telegramBotBrokerForm.loadingConnectionState")}</span>
      </div>
    );
  }
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45}}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">
            {t("telegramBotBrokerForm.currentConnection")}
          </h2>
          <p className="mt-1 text-xs text-slate-500">
            {t("telegramBotBrokerForm.currentlyConnectedAccount")}
          </p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {t("telegramBotBrokerForm.connected")}
        </span>
      </div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-slate-900 shadow-sm">
            IC
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-slate-900">IC Markets</h3>
            <div className="mt-2 grid gap-2 text-xs text-slate-500 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <FiUser />
                <span> {t("telegramBotBrokerForm.account")}: #1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <FiServer />
                <span>
                  {" "}
                  {t("telegramBotBrokerForm.account")}: ICMarkets-Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <FiRefreshCw size={16} />
          {t("telegramBotBrokerForm.testConnection")}
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100"
        >
          {t("telegramBotBrokerForm.disconnect")}
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600">
        <FiCheckCircle size={14} /> {t("telegramBotBrokerForm.lastChecked")}
      </div>
    </motion.div>
  );
}
