"use client";

import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({children}: ProtectedRouteProps) {
  const router = useRouter();

  const {t} = useTranslation();
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      router.replace("/login");
      return;
    }

    setAuthenticated(true);
    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-sm text-slate-500">
          {" "}
          {t("common.checkingAuthentication")}
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return <>{children}</>;
}
