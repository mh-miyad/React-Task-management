import NavComp from "@/components/Navbar/NavComp";
import SidebarComp from "@/components/Sidebar/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex items-start">
      {/* Side bar or Navigation */}
      <div className="flex-grow">
        {" "}
        <SidebarComp />
      </div>
      {/* Side bar or Navigation */}
      {/* main Children or Page  */}
      <main className="flex-grow">
        <div>
          <NavComp />
        </div>
        <div className="mx-10">
          {/* Main Content  */}
          {children}
          {/* Main Content  */}
        </div>
      </main>
      {/* main Children or Page  */}
    </div>
  );
};

export default Layout;
