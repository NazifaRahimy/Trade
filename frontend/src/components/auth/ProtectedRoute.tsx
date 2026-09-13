"use client";

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({children}: ProtectedRouteProps) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    if (!token) {
      router.replace("/login");
      return;
    }

    setAuthenticated(true);
    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-sm text-slate-500">Checking authentication...</div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return <>{children}</>;
}
