import {FiGrid, FiUser, FiLink, FiShield, FiClock} from "react-icons/fi";

export const dashboardMenu = [
  {
    key: "overview",
    href: "/dashboard",
    icon: FiGrid,
  },
  {
    key: "accountStatus",
    href: "/dashboard/account-status",
    icon: FiUser,
  },
  {
    key: "brokerForm",
    href: "/dashboard/broker-form",
    icon: FiLink,
  },
  {
    key: "riskControl",
    href: "/dashboard/risk-control",
    icon: FiShield,
  },
  {
    key: "tradeHistory",
    href: "/dashboard/trade-history",
    icon: FiClock,
  },
];
