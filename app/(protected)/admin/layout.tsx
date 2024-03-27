import React from "react";
import { Toaster } from "react-hot-toast";
import MobileNav from "@/components/mobileNav/MobileNav";
import SideBarNav from "@/components/sidebar/SideBarNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="protected min-h-screen  bg-gray-900 w-full  text-black">
      <SideBarNav />
      <MobileNav />
      <div className="lg:pl-[130px] md:pl-[80px] pt-16 md:pt-0">{children}</div>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default layout;
