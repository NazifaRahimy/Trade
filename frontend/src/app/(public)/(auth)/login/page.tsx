import LoginBreadcrumb from "@/src/components/auth/login/LoginBreadcrumb";
import LoginBenefits from "@/src/components/auth/login/LoginBenefits";
import LoginForm from "@/src/components/auth/login/LoginForm";

export default function LoginPage() {
  return (
    <>
      <LoginBreadcrumb />

      <section className="py-16 ">
        <div className="container mx-auto px-4 xl:px-40 ">
          <div className="grid lg:grid-cols-5">
            <div className="order-2 lg:order-1 lg:col-span-3">
              <LoginForm />
            </div>

            {/* Benefits - RIGHT */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <LoginBenefits />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
