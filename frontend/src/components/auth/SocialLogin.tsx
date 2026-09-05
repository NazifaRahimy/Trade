// "use client";

// import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

// import {auth} from "@/src/firebase/config";
// import {FcGoogle} from "react-icons/fc";

// export default function SocialLogin() {
//   const handleGoogleLogin = async () => {
//     try {
//       const provider = new GoogleAuthProvider();

//       const result = await signInWithPopup(auth, provider);

//       console.log(result.user);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <button
//       type="button"
//       onClick={handleGoogleLogin}
//       className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white py-3 text-slate-700 transition hover:bg-blue-600 hover:text-white dark:border-slate-700"
//     >
//       <FcGoogle size={24} />
//       Continue with Google
//     </button>
//   );
// }
"use client";

import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useRouter} from "next/navigation";
import {auth} from "@/src/firebase/config";
import {FcGoogle} from "react-icons/fc";

export default function SocialLogin() {
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

      const token = await user.getIdToken();

      // Save the same auth data used by normal login
      localStorage.setItem("auth-token", token);
      localStorage.setItem("auth-firstName", firstName);
      localStorage.setItem("auth-lastName", lastName);
      localStorage.setItem("auth-email", user.email || "");
      localStorage.setItem("auth-photo", user.photoURL || "");

      // Notify Header immediately
      window.dispatchEvent(new Event("auth-change"));

      // Go to dashboard
      router.push("/dashboard");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleLogin}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white py-3 text-slate-700 transition hover:bg-blue-600 hover:text-white dark:border-slate-700"
    >
      <FcGoogle size={24} />
      Continue with Google
    </button>
  );
}
