
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import SocialLogin from "@/src/components/auth/SocialLogin";
import { loginUser } from "../../../lib/api";
export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      // پکیج کردن داده‌ها؛ مقدار ایمیل به عنوان یوزرنیم به JWT جنگو فرستاده می‌شود
      const payload = {
        username: formData.email,
        password: formData.password,
      };
      const responseData = await loginUser(formData.email, formData.password);
      if (responseData) {
     const { access, refresh, username } = responseData; // دریافت نام کاربری
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      localStorage.setItem('auth-username', username); // ذخیره نام کاربری
      localStorage.setItem('auth-email', formData.email);

        window.dispatchEvent(new Event("auth-change"));
        alert("Success: Logged in successfully.");
        
        // ۳. هدایت خودکار کاربر به پنل و داشبورد اصلی سایت
        window.location.href = "/dashboard";
      }
    } catch (error: any) {
      console.error("Login Error:", error);
      
      // مدیریت هوشمند خطاهای دریافتی از سرور جنگو
      if (error.response && error.response.data) {
        alert("Failed: Invalid email or password. Please try again.");
      } else {
        alert("Error: Cannot connect to the server. Make sure Django backend is running.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial={{opacity: 0, x: 30}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5}}
      className=" rounded-b-md lg:rounded-b-none  lg:rounded-l-3xl  border border-slate-200 bg-white p-8 lg:px-8 lg:py-10 shadow-lg md:p-10"
    >
      {/* Heading */}
      <div className="mb-7 lg:pt-4">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">
          Sign in to your account
        </h2>

        <p className="text-sm text-slate-500">
          Sign in to access your account.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-9" dir="ltr">
        {/* Email / Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email or Mobile Number
          </label>
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="email"
              placeholder="Enter your email or mobile number"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* Divider */}
      <div className="my-8 flex items-center">
        <div className="h-px flex-1 bg-slate-200" />

        <span className="px-4 text-sm text-slate-500">Or continue with</span>

        <div className="h-px flex-1 bg-slate-200" />
      </div>
      {/* Google Only */}
      <SocialLogin />
      {/* Register */}
      <p dir="ltr" className="mt-8 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-600 transition hover:text-blue-700">
          Sign up
        </Link>
      </p>
    </motion.div>
  );
}
