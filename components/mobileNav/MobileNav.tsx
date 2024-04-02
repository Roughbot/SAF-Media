"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Contact,
  FilePen,
  LayoutDashboard,
  AlignEndVertical,
  Newspaper,
  UsersRound,
  LogInIcon,
} from "lucide-react";

import { Nav } from "../ui/nav";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const MobileNav = () => {
  const handleLogout = async () => {
    await axios.get("/api/auth/logout");
    toast.success("Logged out successfully");
    window.location.href = "/login";
  };

  return (
    <header className="header md:hidden">
      <Link href="/admin" className="flex items-center gap-2">
        <Image
          className="rounded-full bottom-2 p-1 bg-slate-50 border-black"
          src={logo}
          alt="logo"
          width={40}
          height={28}
        />
      </Link>
      <nav>
        <Sheet>
          <SheetTrigger>
            <AlignEndVertical className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent className="sheet-content bg-slate-300">
            <div className="pt-6">
              <Nav
                isCollapsed={false}
                links={[
                  {
                    title: "Dashboard",
                    href: "/admin",
                    icon: LayoutDashboard,
                    variant: "default",
                  },
                  {
                    title: "Messages",
                    href: "/admin/messages",
                    icon: Contact,
                    variant: "ghost",
                  },
                  {
                    title: "Blogs",
                    href: "/admin/blogs",
                    icon: Newspaper,
                    variant: "ghost",
                  },
                  {
                    title: "Create Blog",
                    href: "/admin/create-blog",
                    icon: FilePen,
                    variant: "ghost",
                  },
                  {
                    title: "Users",
                    href: "/admin/users",
                    icon: UsersRound,
                    variant: "ghost",
                  },
                ]}
              />
              <div className="absolute pr-4 bottom-0 w-full flex justify-center items-center py-3 border-t border-gray-200 ">
                <Button
                  size="sm"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  <LogInIcon className="w-5" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default MobileNav;
