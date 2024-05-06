"use client";
import React from "react";
import DarkMoodBtn from "../DarkMood/DarkMoodBtn";
import { CiSearch } from "react-icons/ci";
// import { CgMonday } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import menuStore from "@/Provider/Zustand/Store";

const NavComp = () => {
  const { openMenu } = menuStore();
  const handleClick = () => {
    openMenu();
  };
  return (
    <nav className="py-2 border-b border-b-slate-200 dark:border-b-slate-800 mb-5">
      <div className="flex justify-between items-center py-2 px-3 bg-white dark:bg-slate-800/5  backdrop-blur-sm max-w-7xl mx-auto">
        <div>
          <button onClick={handleClick}>
            {" "}
            <IoMenu className="size-10 text-slate-900 dark:text-white mx-auto" />
          </button>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="searchBox">
            <CiSearch className="mr-2 size-4 shrink-0 opacity-50" />
            <input
              type="text"
              name="search"
              id="search"
              className="searchInput"
              placeholder="Search..."
            />
          </div>
          <DarkMoodBtn />
        </div>
      </div>
    </nav>
  );
};

export default NavComp;
