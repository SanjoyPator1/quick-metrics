import MobileNav from "@/components/layouts/mobile-nav";
import SideNavbar from "@/components/layouts/side-navbar";
import TopNavbar from "@/components/layouts/top-navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <TopNavbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <SideNavbar />
        </div>

        <main className="flex-1 w-full md:ml-[64px] overflow-y-auto">
          <div className="px-4 md:px-8 py-6">{children}</div>
        </main>
      </div>

      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
