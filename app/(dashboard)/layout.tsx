import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex flex-col fixed inset-y-0 h-full w-56 z-50">
        <Sidebar />
      </div>
      <main className="w-full h-full md:pl-56 pt-[80px]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
