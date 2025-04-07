"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  LayoutDashboard,
  FolderKanban,
  Database,
  BarChart,
  Menu,
  LogOut,
  CreditCard,
  Settings,
  HelpCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MobileNav() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Handle navigation item click
  const handleNavClick = () => {
    setIsSheetOpen(false);
  };

  // Handle sign out
  const handleSignOut = async () => {
    // This will be implemented when authentication is set up
    window.location.href = "/sign-in";
  };

  const mainNavItems = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      href: "/projects",
      icon: FolderKanban,
      label: "Projects",
    },
    {
      href: "/library",
      icon: Database,
      label: "Data",
    },
  ];

  return (
    <>
      {/* Fixed bottom navigation bar */}
      <div className="fixed bottom-0 left-0 z-30 flex w-full justify-around border-t bg-background p-2">
        {mainNavItems.map((item) => (
          <NavButton
            key={item.href}
            href={item.href}
            icon={<item.icon size={24} />}
            label={item.label}
            isActive={
              item.href === "/dashboard"
                ? pathname === item.href
                : pathname.startsWith(item.href)
            }
            onClick={handleNavClick}
          />
        ))}

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button className="flex flex-1 flex-col items-center justify-center p-1 text-xs text-muted-foreground">
              <Menu size={24} />
              <span className="mt-1">More</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[85vh] rounded-t-xl px-0">
            <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-muted"></div>
            <SheetHeader className="mb-1 px-4">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-xl font-semibold">Menu</SheetTitle>
                <ThemeToggle />
              </div>
            </SheetHeader>

            <div className="py-4 h-[calc(85vh-80px)] overflow-y-auto px-4">
              <div className="mb-6 space-y-1">
                <h3 className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                  Business Tools
                </h3>

                {/* Reports */}
                <MenuItem
                  href="/reports"
                  icon={BarChart}
                  title="Analytics & Reports"
                  description="View business insights and trends"
                  isActive={pathname.startsWith("/reports")}
                  onClick={handleNavClick}
                />

                {/* Documents */}
                <MenuItem
                  href="/documents"
                  icon={FileText}
                  title="Documentation"
                  description="Access guides and help documents"
                  isActive={pathname.startsWith("/documents")}
                  onClick={handleNavClick}
                />
              </div>

              <div className="mb-6 space-y-1">
                <h3 className="mb-2 text-xs font-medium uppercase text-muted-foreground">
                  Account
                </h3>

                {/* Settings */}
                <MenuItem
                  href="/settings"
                  icon={Settings}
                  title="Settings"
                  description="Manage your account preferences"
                  isActive={pathname === "/settings"}
                  onClick={handleNavClick}
                />

                {/* Help */}
                <MenuItem
                  href="/help"
                  icon={HelpCircle}
                  title="Help & Support"
                  description="Get assistance and resources"
                  isActive={pathname === "/help"}
                  onClick={handleNavClick}
                />
              </div>

              {/* Upgrade to Pro */}
              <div className="mt-4 rounded-xl bg-primary/5 p-4 border border-primary/20">
                <div className="flex items-start">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CreditCard size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Upgrade to Pro</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Get unlimited reports and premium features
                    </p>
                    <Button
                      size="sm"
                      className="mt-3"
                      onClick={() => {
                        handleNavClick();
                        window.location.href = "/settings/plan";
                      }}
                    >
                      View Plans
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                {/* Sign Out */}
                <button
                  onClick={() => {
                    handleNavClick();
                    handleSignOut();
                  }}
                  className="flex w-full items-center rounded-md p-3 text-left transition-colors hover:bg-accent"
                >
                  <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                    <LogOut size={18} className="text-muted-foreground" />
                  </div>
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

function NavButton({
  href,
  icon,
  label,
  isActive,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-1 flex-col items-center justify-center p-1 text-xs ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
      onClick={onClick}
    >
      <div>{icon}</div>
      <span className="mt-1">{label}</span>
    </Link>
  );
}

function MenuItem({
  href,
  icon: Icon,
  title,
  description,
  isActive,
  onClick,
}: {
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-md p-3 transition-colors ${
        isActive ? "bg-primary/10" : "hover:bg-accent"
      }`}
      onClick={onClick}
    >
      <div
        className={`mr-3 flex h-9 w-9 items-center justify-center rounded-full ${
          isActive ? "bg-primary/20" : "bg-muted"
        }`}
      >
        <Icon
          size={20}
          className={isActive ? "text-primary" : "text-muted-foreground"}
        />
      </div>
      <div>
        <span className={`font-medium ${isActive ? "text-primary" : ""}`}>
          {title}
        </span>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
