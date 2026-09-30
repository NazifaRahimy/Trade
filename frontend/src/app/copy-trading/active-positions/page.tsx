"use client";

import { useEffect, useState } from "react";
import api from "@/src/lib/axios";

import PositionsHeader from "@/src/components/copy-trading/active-positions/PositionsHeader";
import PositionsStats from "@/src/components/copy-trading/active-positions/PositionsStats";
import ActivePositionsTable from "@/src/components/copy-trading/active-positions/ActivePositionsTable";
import ProtectedRoute from "@/src/components/auth/ProtectedRoute";

export default function ActivePositionsPage() {
  const [positions, setPositions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLivePositions = async () => {
    try {
      const token = localStorage.getItem("access_token");

      if (!token) {
        console.log("No access token found.");
        setPositions([]);
        return;
      }

      const response = await api.get(
        "/api/copy-trading/active-positions/"
      );

      console.log("Active positions response:", response.data);

      if (Array.isArray(response.data)) {
        setPositions(response.data);
      } else if (Array.isArray(response.data?.results)) {
        setPositions(response.data.results);
      } else {
        setPositions([]);
      }
    } catch (error: any) {
      console.error(
        "Error loading active positions:",
        error
      );

      if (error?.response) {
        console.error(
          "STATUS:",
          error.response.status
        );

        console.error(
          "DATA:",
          error.response.data
        );
      }

      setPositions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLivePositions();

    const interval = setInterval(() => {
      fetchLivePositions();
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ProtectedRoute>
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center gap-2 bg-white text-sm italic text-slate-400">
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-blue-600" />

          <span>
            Loading active positions...
          </span>
        </div>
      ) : (
        <div className="mx-auto min-h-screen w-full max-w-[1700px] space-y-6 bg-slate-50/50 p-4 lg:p-6">
          <PositionsHeader />

          <PositionsStats positions={positions} />

          <ActivePositionsTable positions={positions} />
        </div>
      )}
    </ProtectedRoute>
  );
}