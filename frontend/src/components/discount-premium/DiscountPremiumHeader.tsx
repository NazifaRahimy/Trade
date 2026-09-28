// "use client";

// import {useEffect, useState} from "react";
// import {FiBell, FiMenu, FiMoon, FiSun} from "react-icons/fi";

// interface DiscountPremiumHeaderProps {
//   onMenuClick: () => void;
// }

// export default function DiscountPremiumHeader({
//   onMenuClick,
// }: DiscountPremiumHeaderProps) {
//   const [username, setUsername] = useState("Trader");
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("auth-username");
//     const firstName = localStorage.getItem("auth-firstName");

//     if (firstName) {
//       setUsername(firstName);
//     } else if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   const initial = username.charAt(0).toUpperCase();

//   return (
//     <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-slate-800 bg-slate-950 px-4 text-white sm:px-6">
//       {/* Left */}
//       <div className="flex items-center gap-3 ">
//         <button
//           onClick={onMenuClick}
//           className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 lg:hidden"
//         >
//           <FiMenu size={22} />
//         </button>

//         <div>
//           <h2 className="text-sm font-semibold sm:text-base">
//             Discount & Premium Dashboard
//           </h2>

//           <div className="mt-1 flex items-center gap-2">
//             <span className="h-2 w-2 rounded-full bg-green-500" />

//             <span className="text-xs text-slate-400">Market Connected</span>
//           </div>
//         </div>
//       </div>

//       {/* Right */}
//       <div className=" hidden lg:flex items-center gap-2 sm:gap-4">
//         <button
//           className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
//           title="Notifications"
//         >
//           <FiBell size={19} />
//         </button>

//         <div className=" hidden lg:flex items-center gap-2 border-l border-slate-800 pl-3">
//           <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
//             {initial}
//           </div>

//           <span className="hidden text-sm font-medium sm:block">
//             {username}
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";

import {useEffect, useState} from "react";
import {FiBell, FiMenu} from "react-icons/fi";

interface DiscountPremiumHeaderProps {
  onMenuClick: () => void;
}

export default function DiscountPremiumHeader({
  onMenuClick,
}: DiscountPremiumHeaderProps) {
  const [username, setUsername] = useState("Trader");

  useEffect(() => {
    const loadUser = () => {
      const storedUsername = localStorage.getItem("auth-username");
      const firstName = localStorage.getItem("auth-firstName");

      if (firstName) {
        setUsername(firstName);
      } else if (storedUsername) {
        setUsername(storedUsername);
      }
    };

    loadUser();

    window.addEventListener("auth-change", loadUser);

    return () => {
      window.removeEventListener("auth-change", loadUser);
    };
  }, []);

  const initial = username.charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-4 text-slate-900 sm:px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div>
          <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
            Discount & Premium Dashboard
          </h2>

          <div className="mt-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs text-slate-500">Market Connected</span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}
        <button
          type="button"
          className="rounded-lg p-2 hidden lg:flex text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          title="Notifications"
        >
          <FiBell size={19} />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            {initial}
          </div>

          <span className="hidden text-sm font-medium text-slate-800 sm:block">
            {username}
          </span>
        </div>

        {/* Mobile / Tablet Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
        >
          <FiMenu size={21} />
        </button>
      </div>
    </header>
  );
}
