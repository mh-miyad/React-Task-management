"use client";

import menuStore from "@/Provider/Zustand/Store";
import { FcPositiveDynamic } from "react-icons/fc";
import Link from "next/link";
import React from "react";
import { CgMonday } from "react-icons/cg";
import AvatarImg from "../../Assets/avatr.jpg";
import Image from "next/image";
const SidebarComp = () => {
  const { menubarOpen } = menuStore();

  return (
    <div
      className={` h-screen  mx-auto px-7 py-5 bg-gray-50 border-r  dark:bg-slate-900 overflow-y-auto  ${
        menubarOpen ? "w-[300px]" : "w-[90px]"
      } transition-all ease-linear duration-300`}>
      {/* Sidebar or Navigation */}
      <div>
        {/* logo */}
        <Link
          href={"/"}
          className="flex items-center gap-2 mb-5 justify-center ">
          <CgMonday className="size-12  dark:text-cyan-600 text-cyan-500 " />
          <div
            className={`text-2xl font-bold capitalize flex items-start gap-1  ${
              menubarOpen ? "block" : "hidden"
            }`}>
            <span>task</span>
            <span className="text-cyan-500 font-extrabold text-[28px]">X</span>
          </div>
        </Link>

        {/* logo */}
        {/*  Avatar */}
        <div
          className={`bg-gray-100  rounded-md flex  items-center gap-2 cursor-pointer  hover:bg-gray-200 dark:bg-slate-800 border  dark:border-slate-500  ${
            menubarOpen ? "px-5 py-3 " : ""
          }`}>
          <Image
            src={AvatarImg}
            alt="image of Administrator"
            width={menubarOpen ? 40 : 50}
            height={menubarOpen ? 40 : 50}
            className={`rounded-full `}
          />
          <h2
            className={`text-sm font-medium text-gray-600 dark:text-slate-400 capitalize ${
              menubarOpen ? "block" : "hidden"
            }`}>
            Mh Miyad
          </h2>
        </div>
        {/*  Avatar */}

        {/* Navigation  */}

        <ul className="mt-10 space-y-2">
          <li
            className={` rounded-md flex  items-center gap-2 cursor-pointer   ${
              menubarOpen
                ? "px-5 py-1  dark:bg-cyan-400/20 border  dark:border-slate-500 hover:bg-gray-200 hover:dark:bg-slate-800"
                : ""
            }`}>
            <FcPositiveDynamic className={` size-10`} />
            <h2
              className={`text-sm font-medium text-gray-600 dark:text-slate-400 capitalize ${
                menubarOpen ? "block" : "hidden"
              }`}>
              Dashboard
            </h2>
          </li>
        </ul>

        {/* Navigation  */}
      </div>
      {/* Sidebar or Navigation */}
    </div>
  );
};

export default SidebarComp;
