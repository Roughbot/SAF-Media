import React from "react";
import { Toaster } from "react-hot-toast";
import SideNavBar from "@/components/sidebar/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="protected min-h-screen  bg-slate-400 w-full  text-black">
      <SideNavBar />
      <div className="md:pl-[130px]">{children}</div>
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default layout;
