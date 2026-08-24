// components/NavLink.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // or skip this and use template literals

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "transition-colors",
        isActive
          ? "text-foreground font-medium"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}