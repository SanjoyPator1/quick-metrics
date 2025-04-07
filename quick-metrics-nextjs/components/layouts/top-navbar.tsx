"use client";

import Link from "next/link";
import { UserDropdown } from "@/components/user/user-dropdown";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { NotificationsDropdown } from "@/components/notifications/notifications-dropdown";
import Image from "next/image";
import { IMAGE_LINKS } from "@/lib/constants/image";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image
              src={IMAGE_LINKS.brandLogoOnlyHead}
              alt="Quick Metrics"
              width={32}
              height={32}
            />
            <span className="font-semibold hidden sm:inline-block">
              Quick Metrics
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <NotificationsDropdown />

          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
