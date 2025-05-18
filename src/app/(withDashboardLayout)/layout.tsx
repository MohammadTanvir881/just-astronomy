import DashboardPage from "@/components/ui/components/sidebar/sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen ">
      {/* Sidebar - full width on small, fixed width on lg+ */}
      <div className="w-full lg:w-64">
        <DashboardPage />
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
