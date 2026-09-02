import {
  FiGrid,
  FiUser,
  FiLink,
  FiShield,
  FiClock,
  FiCreditCard,
} from "react-icons/fi";

export const dashboardMenu = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: FiGrid,
  },
  {
    label: "Account Status",
    href: "/dashboard/account-status",
    icon: FiUser,
  },
  {
    label: "Broker Connection",
    href: "/dashboard/broker-form",
    icon: FiLink,
  },
  {
    label: "Risk Control",
    href: "/dashboard/risk-control",
    icon: FiShield,
  },
  {
    label: "Trade History",
    href: "/dashboard/trade-history",
    icon: FiClock,
  },
  {
    label: "Subscription",
    href: "/dashboard/subscription",
    icon: FiCreditCard,
  },
];
