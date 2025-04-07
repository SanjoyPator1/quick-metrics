"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Database,
  BarChart,
  FileText,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function SideNavbar() {
  const pathname = usePathname();

  const navItems = [
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
    {
      href: "/reports",
      icon: BarChart,
      label: "Reports",
    },
    {
      href: "/documents",
      icon: FileText,
      label: "Documents",
    },
    {
      href: "/settings",
      icon: Settings,
      label: "Settings",
    },
    {
      href: "/help",
      icon: HelpCircle,
      label: "Help",
    },
  ];

  return (
    <div className="fixed top-16 h-[calc(100vh-4rem)] w-[64px] flex-col border-r bg-background">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto py-3 px-2">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                icon={item.icon}
                label={item.label}
                isActive={
                  item.href === "/dashboard"
                    ? pathname === item.href
                    : pathname.startsWith(item.href)
                }
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon: Icon,
  label,
  isActive,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center justify-center text-center"
    >
      <div
        className={`mb-1 rounded-xl p-2.5 transition-all duration-150 
        ${
          isActive
            ? "bg-primary/10 text-primary shadow-sm dark:shadow-none"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        <Icon size={20} />
      </div>
      <span
        className={`text-[11px] font-medium ${
          isActive ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}
