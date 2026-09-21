"use client";

import { motion } from "framer-motion";

type RiskGaugeProps = {
  currentRisk: number;
};

export default function RiskGauge({ currentRisk }: RiskGaugeProps) {
  // فرمول محاسبه عقربه داینامیک دایره‌ای با SVG
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const safeRisk = Math.min(Math.max(currentRisk, 0), 100);
  const strokeDashoffset = circumference - (safeRisk / 100) * circumference;

  let riskStatus = "Low Risk";
  let statusColor = "text-emerald-500";
  let gaugeColor = "#10b981"; 
  let bgCircleColor = "#ecfdf5"; 

  if (safeRisk > 5) {
    riskStatus = "High Risk 🔥";
    statusColor = "text-rose-600";
    gaugeColor = "#e11d48"; 
    bgCircleColor = "#fff1f2"; 
  } else if (safeRisk > 2.5) {
    riskStatus = "Moderate Risk 📊";
    statusColor = "text-amber-500";
    gaugeColor = "#f59e0b"; 
    bgCircleColor = "#fffbeb"; 
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm w-full"
    >
      <h3 className="mb-6 text-xl font-semibold text-slate-900">
        Current Risk Level
      </h3>

      <div className="flex justify-center">
        <div className="relative h-44 w-44">
          {/* عقربه داینامیک دایره‌ای با SVG */}
          <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke={bgCircleColor}
              strokeWidth="12"
              fill="transparent"
            />
            <motion.circle
              cx="80"
              cy="80"
              r={radius}
              stroke={gaugeColor}
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: strokeDashoffset }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              strokeLinecap="round"
            />
          </svg>

          {/* رندر کردن عدد واقعی در مرکز دایره */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-slate-900">
              {currentRisk}%
            </span>
          </div>
        </div>
      </div>

      <p className={`mt-4 text-center text-sm font-semibold ${statusColor}`}>
        {riskStatus}
      </p>
    </motion.div>
  );
}
