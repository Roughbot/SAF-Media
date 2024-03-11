import React from "react";
import { Toaster } from "react-hot-toast";
import SideNavBar from "@/components/sidebar/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="protected min-h-screen w-full flex text-black">
      <SideNavBar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default layout;
