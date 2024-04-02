"use client";

import {
  Contact,
  FilePen,
  LayoutDashboard,
  LogInIcon,
  Newspaper,
  UsersRound,
} from "lucide-react";
import { Nav } from "../ui/nav";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import logo from "@/public/logo.png";
import Image from "next/image";
import { useWindowWidth } from "@react-hook/window-size";

const SideNavBar = () => {
  const onlyWidth = useWindowWidth();
  const isMediumScreen = onlyWidth < 900;

  const handleLogout = async () => {
    await axios.get("/api/auth/logout");
    toast.success("Logged out successfully");
    window.location.href = "/login";
  };

  return (
    <div className="fixed bg-slate-300 hidden h-screen md:block  max-w-[130px] border-r px-3 pb-10 pt-24">
      <div>
        <Image
          src={logo}
          alt="Company Logo"
          className={`absolute  border-2 p-1 bg-slate-50 border-black w-16 h-16 rounded-full bg-transparent ${
            isMediumScreen ? "top-6 w-12 h-12 right-1" : "right-[35px] top-5"
          }`}
        />
      </div>
      <div className="flex flex-col items-center justify-end">
        <Nav
          isCollapsed={isMediumScreen}
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
        <div className="absolute bg-slate-300 bottom-0 w-full flex justify-center items-center py-3 border-t border-gray-200 ">
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
    </div>
  );
};

export default SideNavBar;
