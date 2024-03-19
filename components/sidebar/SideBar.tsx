"use client";

import {
  ChevronsLeftIcon,
  ChevronsRightIcon,
  Contact,
  FilePen,
  LayoutDashboard,
  LogInIcon,
  Newspaper,
  UsersRound,
} from "lucide-react";
import { Nav } from "../ui/nav";
import { useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";
import toast from "react-hot-toast";
import logo from "@/public/logo.png";
import Image from "next/image";

const SideNavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = async () => {
    await axios.get("/api/auth/logout");
    toast.success("Logged out successfully");
    window.location.href = "/login";
  };

  return (
    <div className="fixed bg-slate-300 hidden h-screen md:block min-w-[80px] max-w-[130px] border-r px-3 pb-10 pt-24">
      <div>
        <Image
          src={logo}
          alt="Company Logo"
          className={`absolute right-[35px] top-5 ${
            isCollapsed ? "w-12 h-12 right-[18px] mt-5" : "w-16 h-16"
          } rounded-full bg-transparent`}
        />
        <div className="absolute right-[-20px] top-4">
          <Button
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
            variant="secondary"
            className="rounded-xl p-2"
          >
            {isCollapsed ? <ChevronsRightIcon /> : <ChevronsLeftIcon />}
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end">
        <Nav
          isCollapsed={isCollapsed}
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
