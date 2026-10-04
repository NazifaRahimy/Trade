"use client";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {FiLock, FiShield} from "react-icons/fi";

export default function SecurityNotice() {
  const {t} = useTranslation();
  return (
    <motion.div
      initial={{opacity: 0, y: 15}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.45, delay: 0.25}}
      className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5"
    >
      <div className="flex gap-4">
        {/* آیکون سپر حفاظتی پلتفرم */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <FiShield size={19} />
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <FiLock className="text-blue-600" size={14} />
            {t("telegramBotBrokerForm.encryptionActive")}
          </h3>

          {/* متن به‌روزرسانی‌شده منطبق بر لایه رمزنگاری واقعی بک‌اَند شما */}
          <p className="mt-2 text-xs leading-5 text-slate-600">
            {t("telegramBotBrokerForm.securityDescription")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
