"use client";

import { isTeacher } from "@/lib/teacher";
import { UserButton, useAuth } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchInput from "./search-input";
import { Button } from "./ui/button";
import { ModeToggle } from "./toogle-theme";

type Props = {};

const NavbarRoutes = (props: Props) => {
  const { userId } = useAuth();
  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";
  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        <ModeToggle />
        {isTeacherPage || isCoursePage ? (
          <Link href={`/`}>
            <Button size={"sm"} variant={`ghost`}>
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher(userId) ? (
          <Link href={`/teacher/courses`}>
            <Button size={"sm"} variant={`ghost`}>
              Teacher Mode
            </Button>
          </Link>
        ) : (
          <p></p>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default NavbarRoutes;
