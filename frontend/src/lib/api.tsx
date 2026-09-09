// 👈 ایمپورت کردن کلاینت شبکه که در فایل بغلی تنظیم کردید
import api from './axios';

/**
 * سرویس ارسال اطلاعات ثبت‌نام کاربران به دیتابیس جنگو
 */
export const registerUser = async (email: string, password: string) => {
  // تبدیل ایمیل به متن خالص جهت ساخت یوزرنیم بدون علامت @ در جنگو
  const generatedUsername = email.split('@')[0]; 
  
  const payload = {
    username: generatedUsername,
    email: email,
    password: password
  };
  const response = await api.post('/api/auth/register/', payload);
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

  const response = await api.post('/api/auth/token/', payload);
  return response.data; // حاوی توکن‌های access و refresh
};
// 👈 این توابع جدید را به انتهای فایل lip/api.tsx اضافه کنید:

/**
 * ۱. دریافت اطلاعات مالی زنده (بالانس، اکویتی، سود روزانه) برای کارت‌های داشبورد
 */
export const getDashboardStats = async () => {
  const response = await api.get('/api/dashboard/stats/');
  return response.data;
};

/**
 * ۲. دکمه توقف اضطراری و روشن/خاموش کردن ربات کپی‌ترید (Stop / On Switch)
 */
export const toggleBotStatus = async (isActive: boolean) => {
  const response = await api.post('/api/user/toggle-bot/', { is_active: isActive });
  return response.data;
};

/**
 * ۳. ذخیره و به‌روزرسانی مشخصات بروکر متاتریدر ۵ (Broker Connection)
 */
export const updateBrokerConnection = async (brokerData: {
  mt5_login: number;
  mt5_password: string;
  mt5_server: string;
}) => {
  const response = await api.post('/api/user/broker/', brokerData);
  return response.data;
};


export const updateRiskSettings = async (riskData: {
  risk_percent: number;
  first_entry_risk_share: number;
  second_entry_risk_share: number;
  max_open_trades: number;
  custom_lot: number;
}) => {
  const response = await api.post('/api/user/risk-settings/', riskData);
  return response.data;
};


export const getTradeHistory = async () => {
  const response = await api.get('/bot/history/');
  return response.data;
};
