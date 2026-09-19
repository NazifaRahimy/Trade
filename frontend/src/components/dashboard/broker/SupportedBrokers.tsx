"use client";

import { useEffect, useState } from "react";
import api from "../../../lib/axios"; // ایمپورت هسته مرکزی شبکه

export default function SupportedBrokers() {
  const [brokers, setBrokers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // فچ آنلاین بروکرهای ثبت شده در پنل ادمین جنگو
  useEffect(() => {
    const fetchBrokers = async () => {
      try {
        const response = await api.get("/api/user/broker-list/");
        if (response.data && response.data.supported_brokers) {
          setBrokers(response.data.supported_brokers);
        }
      } catch (error) {
        console.error("Error fetching brokers list:", error);
      } {
        setLoading(false);
      }
    };
    fetchBrokers();
  }, []);

  if (loading) {
    return <div className="text-xs text-slate-400 italic p-6 bg-white rounded-2xl border border-slate-200">Loading verified platforms...</div>;
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
      <h3 className="font-semibold text-slate-900 text-sm">Supported Brokers</h3>
      <p className="text-xs text-slate-400 -mt-2">Select one of the supported trading platforms.</p>
      
      <div className="space-y-2">
        {brokers.length === 0 ? (
          <p className="text-xs text-slate-400 italic">No brokers registered in database.</p>
        ) : (
          brokers.map((broker, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-xs text-slate-800 border border-slate-100">
                  {broker.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-800 block">{broker}</span>
                  <span className="text-[10px] text-slate-400">Forex & CFD</span>
                </div>
              </div>
              <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
