"use client";

import menuStore from "@/Provider/Zustand/Store";
import React from "react";
import { CgMonday } from "react-icons/cg";

const SidebarComp = () => {
  const { menubarOpen } = menuStore();
  console.log(menubarOpen);
  return (
    <div className=" h-screen sm:min-w-[100px] max-w-2xl mx-auto px-10 py-5 bg-red-400">
      {/* Sidebar or Navigation */}
      <div>
        <div>
          <CgMonday className="size-10 text-slate-900 dark:text-white mx-auto" />
        </div>
      </div>
      {/* Sidebar or Navigation */}
    </div>
  );
};

export default SidebarComp;
