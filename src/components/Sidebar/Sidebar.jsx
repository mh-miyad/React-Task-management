"use client";

import menuStore from "@/Provider/Zustand/Store";
import { Avatar } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { CgMonday } from "react-icons/cg";
import AvatarImg from "../../Assets/avatr.jpg";
import Image from "next/image";
const SidebarComp = () => {
  const { menubarOpen } = menuStore();

  return (
    <div className=" h-screen w-[300px] mx-auto px-7 py-5 bg-white border-r  dark:bg-slate-900 overflow-y-auto ">
      {/* Sidebar or Navigation */}
      <div>
        {/* logo */}
        <Link
          href={"/"}
          className="flex items-center gap-2 mb-5 justify-center ">
          <CgMonday className="size-12  dark:text-cyan-600 text-cyan-500 " />
          <div className="text-2xl font-bold capitalize flex items-start gap-1">
            <span>task</span>
            <span className="text-cyan-500 font-extrabold text-[28px]">X</span>
          </div>
        </Link>

        {/* logo */}
        {/*  Avatar */}
        <div className="bg-gray-100 px-5 py-3 rounded-md flex  items-center gap-2 cursor-pointer hover:bg-gray-200 dark:bg-slate-800 border  dark:border-slate-500">
          <Image
            src={AvatarImg}
            alt="image of Administrator"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h2 className="text-sm font-medium text-gray-600 dark:text-slate-400 capitalize">
            Mh Miyad
          </h2>
        </div>
        {/*  Avatar */}

        {/* Navigation  */}
        
          <ul>
            <li></li>
          </ul>
       
        {/* Navigation  */}
      </div>
      {/* Sidebar or Navigation */}
    </div>
  );
};

export default SidebarComp;
