import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root bg-zinc-950">
      <Header />
      {children}
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  );
};

export default layout;
