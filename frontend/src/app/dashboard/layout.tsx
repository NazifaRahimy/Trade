// import DashboardSidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* <DashboardSidebar /> */}

      <main className="min-h-screen lg:ml-64">{children}</main>
    </div>
  );
}
