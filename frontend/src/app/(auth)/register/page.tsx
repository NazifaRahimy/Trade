import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Create your Trade-platform account.",
};

const Register = () => {
  return (
    <div>
      <h1>ثبت نام</h1>
      <p>حساب کاربری جدید ایجاد کنید و از خدمات آکادمی استفاده نمایید.</p>
    </div>
  );
};

export default Register;
