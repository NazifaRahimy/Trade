"use client";

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";
import {
  FiMail,
  FiLock,
  FiUser,
  FiEye,
  FiEyeOff,
  FiLoader,
} from "react-icons/fi";
import api from "@/src/lib/axios";
import SocialLogin from "./SocialLogin";
import {useTranslation} from "react-i18next";

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {t, i18n} = useTranslation();
  const isPersian = i18n.language.startsWith("fa");
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert(t("register.passwordMismatch"));
      return;
    }

    try {
      setLoading(true);

      // 🚀 انطباق ۱۰۰٪ با فیلدهای آرایه RegisterSerializer بک‌اَند شما
      const payload = {
        username: formData.email, // ایمیل مشتری به عنوان کُد شناسایی یکتا (Username) چفت می‌شود
        email: formData.email,
        password: formData.password,
      };

      // شلیک مستقیم به کلاس ثبت‌نام بدون فرستادن فیلدهای تکراری
      const response = await api.post("/api/auth/register/", payload);

      if (response.status === 201) {
        alert(t("register.success"));
        router.push("/login");
      }
    } catch (error: any) {
      console.error("Registration Core Matrix Failure:", error);
      if (error.response && error.response.data) {
        const serverErrors = Object.entries(error.response.data)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n");
        alert(`${t("register.registrationRejected")}\n${serverErrors}`);
      } else {
        alert(t("register.networkError"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{opacity: 0, x: -30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      className={`rounded-b-md lg:rounded-b-none ${isPersian ? "lg:rounded-r-3xl" : "lg:rounded-l-3xl"} border border-slate-200 bg-white p-6 shadow-lg text-slate-900`}
    >
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          {t("register.formTitle")}
        </h2>
        <p className="text-sm text-slate-500">{t("register.formSubtitle")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name (حفظ ظاهر گرافیکی شما) */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("register.fullName")}
          </label>
          <div className="relative">
            <FiUser
              className={`absolute ${isPersian ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 text-slate-400`}
            />
            <input
              type="text"
              name="fullName"
              placeholder={t("register.lastNamePlaceholder")}
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white py-3 px-11  text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Last Name (حفظ ظاهر گرافیکی شما) */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("register.lastName")}
          </label>
          <div className="relative">
            <FiUser
              className={`absolute  ${isPersian ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 text-slate-400`}
            />
            <input
              type="text"
              name="lastName"
              placeholder={t("register.lastNamePlaceholder")}
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white py-3 px-11  text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("register.email")}
          </label>
          <div className="relative">
            <FiMail
              className={`absolute  ${isPersian ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 text-slate-400`}
            />
            <input
              type="email"
              name="email"
              placeholder={t("register.emailPlaceholder")}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white py-3 px-11 pr- text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("register.password")}
          </label>
          <div className="relative">
            <FiLock
              className={`absolute  ${isPersian ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 text-slate-400`}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={t("register.passwordPlaceholder")}
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute  ${isPersian ? "left-4" : "right-4"}  top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600`}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            {t("register.confirmPassword")}
          </label>
          <div className="relative">
            <FiLock
              className={`absolute  ${isPersian ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 text-slate-400`}
            />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder={t("register.confirmPasswordPlaceholder")}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className={`absolute  ${isPersian ? "left-4" : "right-4"}  top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600`}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {loading ? <FiLoader className="animate-spin" size={16} /> : null}
          {loading
            ? t("register.creatingAccount")
            : t("register.createAccount")}
        </button>
      </form>

      <div className="my-5 flex items-center">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="px-4 text-sm text-slate-500">{t("register.or")}</span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <SocialLogin />

      <p className="mt-6 text-center text-sm text-slate-500">
        {t("register.alreadyHaveAccount")}
        <Link
          href="/login"
          className="font-medium px-1 text-blue-600 transition hover:text-blue-700"
        >
          {t("register.signIn")}
        </Link>
      </p>
    </motion.div>
  );
}
