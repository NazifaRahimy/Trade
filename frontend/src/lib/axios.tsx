import axios, {
  AxiosError,
  AxiosRequestConfig,
} from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ======================================================
// Request Interceptor
// اضافه کردن Access Token به تمام درخواست‌های API
// ======================================================

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("access_token");

      if (accessToken) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ======================================================
// Refresh Token Manager
// ======================================================

let isRefreshing = false;

let refreshSubscribers: Array<(token: string) => void> = [];

const subscribeTokenRefresh = (
  callback: (token: string) => void
) => {
  refreshSubscribers.push(callback);
};

const onRefreshed = (token: string) => {
  refreshSubscribers.forEach((callback) => {
    callback(token);
  });

  refreshSubscribers = [];
};

// ======================================================
// Refresh Access Token
// ======================================================

const refreshAccessToken = async (): Promise<string | null> => {
  if (typeof window === "undefined") {
    return null;
  }

  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    return null;
  }

  try {
    const response = await axios.post(
      `${API_URL}/api/auth/token/refresh/`,
      {
        refresh: refreshToken,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const newAccessToken = response.data?.access;

    if (!newAccessToken) {
      return null;
    }

    localStorage.setItem(
      "access_token",
      newAccessToken
    );

    return newAccessToken;
  } catch (error) {
    console.error(
      "Refresh token failed:",
      error
    );

    return null;
  }
};

// ======================================================
// Response Interceptor
// اگر 401 شد:
// 1. Refresh Token
// 2. گرفتن Access Token جدید
// 3. تکرار همان درخواست
// ======================================================

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error: AxiosError) => {
    const originalRequest =
      error.config as AxiosRequestConfig & {
        _retry?: boolean;
      };

    // فقط زمانی Refresh کنیم که:
    // - پاسخ 401 باشد
    // - درخواست قبلاً Retry نشده باشد
    // - درخواست Refresh خودش نباشد

    if (
      error.response?.status !== 401 ||
      originalRequest?._retry ||
      originalRequest?.url?.includes("/api/auth/token/refresh/") ||
      originalRequest?.url?.includes("/api/auth/google/")
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    // ==================================================
    // اگر یک Refresh در حال انجام است
    // درخواست‌های دیگر منتظر همان Refresh می‌مانند
    // ==================================================

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        subscribeTokenRefresh((newToken) => {
          if (!originalRequest.headers) {
            originalRequest.headers = {};
          }

          originalRequest.headers.Authorization =
            `Bearer ${newToken}`;

          resolve(api(originalRequest));
        });

        // در صورت شکست Refresh، Promiseهای منتظر
        // در مرحله بعد توسط logout مدیریت می‌شوند.
      });
    }

    isRefreshing = true;

    try {
      const newAccessToken =
        await refreshAccessToken();

      if (!newAccessToken) {
        throw new Error(
          "Unable to refresh access token"
        );
      }

      // درخواست‌های منتظر را با توکن جدید آزاد کن
      onRefreshed(newAccessToken);

      // توکن جدید را روی درخواست اصلی قرار بده
      if (!originalRequest.headers) {
        originalRequest.headers = {};
      }

      originalRequest.headers.Authorization =
        `Bearer ${newAccessToken}`;

      // اجرای دوباره درخواست اصلی
      return api(originalRequest);

    } catch (refreshError) {
      // اگر Refresh Token هم دیگر معتبر نباشد
      // کاربر باید دوباره Login کند.

      if (typeof window !== "undefined") {
        localStorage.removeItem(
          "access_token"
        );

        localStorage.removeItem(
          "refresh_token"
        );

        localStorage.removeItem(
          "auth-username"
        );

        localStorage.removeItem(
          "auth-firstName"
        );

        localStorage.removeItem(
          "auth-email"
        );

        localStorage.removeItem(
          "auth-role"
        );

        window.location.href = "/login";
      }

      return Promise.reject(refreshError);

    } finally {
      isRefreshing = false;
    }
  }
);

// ======================================================
// REGISTER
// ======================================================

export const registerUser = async (
  email: string,
  password: string
) => {
  const generatedUsername =
    email.split("@")[0];

  const payload = {
    username: generatedUsername,
    email: email,
    password: password,
  };

  const response = await api.post(
    "/api/auth/register/",
    payload
  );

  return response.data;
};

// ======================================================
// LOGIN
// ======================================================

export const loginUser = async (
  loginInput: string,
  password: string
) => {
  const payload = {
    username: loginInput,
    password: password,
  };

  const response = await api.post(
    "/api/auth/token/",
    payload
  );

  return response.data;
};

// ======================================================
// DASHBOARD STATS
// ======================================================

export const getDashboardStats = async () => {
  const response = await api.get(
    "/api/stats/overview/"
  );

  return response.data;
};

// ======================================================
// BOT STATUS
// ======================================================

export const toggleBotStatus = async (
  isActive: boolean
) => {
  const response = await api.post(
    "/api/user/toggle-bot/",
    {
      is_active: isActive,
    }
  );

  return response.data;
};

// ======================================================
// BROKER CONNECTION
// ======================================================

export const updateBrokerConnection = async (
  brokerData: {
    mt5_login: number;
    mt5_password: string;
    mt5_server: string;
  }
) => {
  const response = await api.post(
    "/api/user/broker/",
    brokerData
  );

  return response.data;
};

// ======================================================
// RISK SETTINGS
// ======================================================

export const updateRiskSettings = async (
  riskData: {
    risk_percent: number;
    first_entry_risk_share: number;
    second_entry_risk_share: number;
    max_open_trades: number;
    custom_lot: number;
  }
) => {
  const response = await api.post(
    "/api/user/broker/",
    riskData
  );

  return response.data;
};

// ======================================================
// TRADE HISTORY
// ======================================================

export const getTradeHistory = async () => {
  const response = await api.get(
    "/api/stats/trade-history/"
  );

  return response.data;
};

export default api;