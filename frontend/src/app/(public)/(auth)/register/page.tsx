import RegisterBreadcrumb from "@/src/components/auth/RegisterBreadcrumb";
import RegisterBenefits from "@/src/components/auth/RegisterBenefits";
import RegisterForm from "@/src/components/auth/RegisterForm";
export default function RegisterPage() {
  return (
    <>
      <RegisterBreadcrumb />

      <section className="py-16">
        <div className="container mx-auto px-4 lg:20 xl:px-40">
          <div className="grid lg:grid-cols-5">
            <div className="order-2 lg:order-1 lg:col-span-3">
              <RegisterForm />
            </div>

            {/* Benefits - RIGHT */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <RegisterBenefits />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
