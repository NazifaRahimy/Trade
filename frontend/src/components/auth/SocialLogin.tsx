"use client";

import api from "@/src/lib/axios";
import {useTranslation} from "react-i18next";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useRouter} from "next/navigation";
import {auth} from "@/src/firebase/config";
import {FcGoogle} from "react-icons/fc";

export default function SocialLogin() {
  const {t} = useTranslation();
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const fullName = user.displayName || "";
      const nameParts = fullName.trim().split(/\s+/);

      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      // Firebase ID Token
      const firebaseIdToken = await user.getIdToken();

      // Send Firebase token to Django
      const response = await api.post("/api/auth/google/", {
        id_token: firebaseIdToken,
      });

      // Django SimpleJWT tokens
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      if (!accessToken || !refreshToken) {
        throw new Error("Django JWT tokens were not returned.");
      }

      // Save Django authentication
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);

      localStorage.setItem(
        "auth-username",
        response.data.username || user.email || "",
      );

      localStorage.setItem("auth-firstName", firstName);
      localStorage.setItem("auth-lastName", lastName);
      localStorage.setItem("auth-email", user.email || "");
      localStorage.setItem("auth-photo", user.photoURL || "");

      // Notify Header
      window.dispatchEvent(new Event("auth-change"));

      // Go to dashboard
      router.push("/dashboard");
    } catch (error: any) {
      console.error("========== GOOGLE LOGIN ERROR ==========");
      console.error("Full error:", error);
      console.error("Message:", error?.message);
      console.error("Code:", error?.code);
      console.error("Response:", error?.response);
      console.error("Response data:", error?.response?.data);
      console.error("Response status:", error?.response?.status);
      console.error("Response headers:", error?.response?.headers);
      console.error("========================================");
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white py-3 text-slate-700 transition hover:bg-blue-600 hover:text-white dark:border-slate-700"
    >
      <FcGoogle size={24} />
      {t("auth.continueWithGoogle")}
    </button>
  );
}
