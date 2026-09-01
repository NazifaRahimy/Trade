import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your Trade-platform account.",
};

const Login = () => {
  return (
    <div>
      <h1>ورود به حساب کاربری</h1>
      <p>برای دسترسی به پنل کاربری وارد حساب خود شوید.</p>
    </div>
  );
};

export default Login;
