// 🟢 ایمپورت دقیق از فایل اکسوس جدید شما (نام فایل خود را چک کنید، مثلاً ./axios یا ./axiosInstance)
import axiosInstance from './axios';

/**
 * سرویس ارسال اطلاعات ثبت‌نام کاربران به دیتابیس جنگو
 */
export const registerUser = async (email: string, password: string) => {
  const generatedUsername = email.split('@')[0]; 
  
  const payload = {
    username: generatedUsername,
    email: email,
    password: password
  };
  const response = await axiosInstance.post('/api/auth/register/', payload);
  return response.data;
};

/**
 * سرویس ورود کاربر و دریافت توکن‌های JWT
 */
export const loginUser = async (loginInput: string, password: string) => {
  const payload = {
    username: loginInput,
    password: password
  };

  const response = await axiosInstance.post('/api/auth/token/', payload);
  return response.data;
};

/**
 * دریافت آمارهای کلی داشبورد
 */
export const getDashboardStats = async () => {
  const response = await axiosInstance.get('/api/stats/overview/');
  return response.data;
};

/**
 * دکمه توقف اضطراری و روشن/خاموش کردن ربات
 */
export const toggleBotStatus = async (isActive: boolean) => {
  const response = await axiosInstance.post('/api/user/toggle-bot/', { is_active: isActive });
  return response.data;
};

/**
 * ذخیره و به‌روزرسانی مشخصات بروکر متاتریدر ۵ ربات طلا
 */
export const updateBrokerConnection = async (brokerData: {
  mt5_login: number;
  mt5_password: string;
  mt5_server: string;
}) => {
  const response = await axiosInstance.post('/api/user/broker/', brokerData);
  return response.data;
};

/**
 * ذخیره تنظیمات مدیریت ریسک و وزن پوزیشن‌ها
 */
export const updateRiskSettings = async (riskData: {
  risk_percent: number;
  first_entry_risk_share: number;
  second_entry_risk_share: number;
  max_open_trades: number;
  custom_lot: number;
}) => {
  const response = await axiosInstance.post('/api/user/broker/', riskData);
  return response.data;
};

/**
 * دریافت تاریخچه معاملات بسته شده
 */
export const getTradeHistory = async () => {
  const response = await axiosInstance.get('/api/stats/trade-history/');
  return response.data;
};
