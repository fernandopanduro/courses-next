"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const SidebarItem = ({ icon: Icon, label, href }: Props) => {
  const pathname = usePathname();
  const route = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => route.push(href);

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 dark:text-slate-200",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg hover:text-sky-700 hover:bg-sky-200/20 dark:text-sky-500"
      )}>
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500 dark:text-slate-200",
            isActive && "text-sky-700 dark:text-sky-500"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};

export default SidebarItem;
