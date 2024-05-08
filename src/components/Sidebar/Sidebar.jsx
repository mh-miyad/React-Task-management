"use client";
import menuStore from "@/Provider/Zustand/Store";
import {
  FcPositiveDynamic,
  FcConferenceCall,
  FcPaid,
  FcParallelTasks,
} from "react-icons/fc";
import Link from "next/link";

import { CgMonday } from "react-icons/cg";
import AvatarImg from "../../Assets/avatr.jpg";
import Image from "next/image";
import { Drawer } from "flowbite-react";
import { usePathname } from "next/navigation";

const SidebarComp = () => {
  const { menubarOpen, closeMenu, openMenu } = menuStore();
  const pathname = usePathname();

  return (
    <>
      <div
        className={`flex-grow hidden md:block h-screen min-w-[100px]  px-7 py-5 bg-gray-50/20 border-r   dark:bg-slate-900 overflow-y-auto  ${
          menubarOpen ? "w-[300px]" : "w-[80px]"
        } transition-all ease-linear duration-300 `}>
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
              <span className="text-cyan-500 font-extrabold text-[28px]">
                X
              </span>
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
            <li>
              <Link
                href={"/"}
                className={` rounded-md flex  items-center gap-2 cursor-pointer    ${
                  pathname === "/"
                    ? "bg-cyan-200/20 dark:bg-cyan-400/20 border-2 border-cyan-400/20 dark:border-teal-500/30 hover:bg-cyan-300/30 hover:dark:bg-cyan-500/20 "
                    : " dark:bg-transparent hover:bg-gray-200 hover:dark:bg-slate-800 "
                } ${
                  menubarOpen
                    ? "py-1 px-5 dark:bg-cyan-400/20 border  dark:border-slate-500 hover:bg-gray-200 hover:dark:bg-slate-800 "
                    : ""
                }`}>
                <FcPositiveDynamic className={` size-10`} />
                <h2
                  className={`text-sm font-medium  capitalize ${
                    menubarOpen ? "block" : "hidden"
                  } ${
                    pathname === "/"
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-gray-600 dark:text-slate-400"
                  }`}>
                  Dashboard
                </h2>
              </Link>
            </li>
            <li>
              <Link
                href={"/user"}
                className={` rounded-md flex  items-center gap-2 cursor-pointer    ${
                  pathname === "/user"
                    ? "bg-cyan-200/20 dark:bg-cyan-400/20 border-2 border-cyan-400/20 dark:border-teal-500/30 hover:bg-cyan-300/30 hover:dark:bg-cyan-500/20  "
                    : " dark:bg-transparent hover:bg-gray-200 hover:dark:bg-slate-800 "
                } ${
                  menubarOpen
                    ? "py-1 px-5 dark:bg-cyan-400/20 border  dark:border-slate-500 hover:bg-gray-200 hover:dark:bg-slate-800 "
                    : ""
                }`}>
                <FcConferenceCall className={` size-10`} />
                <h2
                  className={`text-sm font-medium  capitalize ${
                    menubarOpen ? "block" : "hidden"
                  } ${
                    pathname === "/user"
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-gray-600 dark:text-slate-400"
                  }`}>
                  User
                </h2>
              </Link>
            </li>
            <li>
              <Link
                href={"/product"}
                className={` rounded-md flex  items-center gap-2 cursor-pointer    ${
                  pathname === "/product"
                    ? "bg-cyan-200/20 dark:bg-cyan-400/20 border-2 border-cyan-400/20 dark:border-teal-500/30 hover:bg-cyan-300/30 hover:dark:bg-cyan-500/20  "
                    : " dark:bg-transparent hover:bg-gray-200 hover:dark:bg-slate-800  "
                } ${
                  menubarOpen
                    ? "py-1 px-5 dark:bg-cyan-400/20 border  dark:border-slate-500 hover:bg-gray-200 hover:dark:bg-slate-800 "
                    : ""
                }`}>
                <FcPaid className={` size-10`} />
                <h2
                  className={`text-sm font-medium  capitalize ${
                    menubarOpen ? "block" : "hidden"
                  } ${
                    pathname === "/product"
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-gray-600 dark:text-slate-400"
                  }`}>
                  Product
                </h2>
              </Link>
            </li>
            <li>
              <Link
                href={"/task"}
                className={` rounded-md flex  items-center gap-2 cursor-pointer    ${
                  pathname === "/task"
                    ? "bg-cyan-200/20 dark:bg-cyan-400/20 border-2 border-cyan-400/20 dark:border-teal-500/30 hover:bg-cyan-300/30 hover:dark:bg-cyan-500/20  "
                    : " dark:bg-transparent hover:bg-gray-200 hover:dark:bg-slate-800 "
                } ${
                  menubarOpen
                    ? "py-1 px-5 dark:bg-cyan-400/20 border  dark:border-slate-500 hover:bg-gray-200 hover:dark:bg-slate-800 "
                    : ""
                }`}>
                <FcParallelTasks className={` size-10`} />
                <h2
                  className={`text-sm font-medium  capitalize ${
                    menubarOpen ? "block" : "hidden"
                  } ${
                    pathname === "/task"
                      ? "text-cyan-600 dark:text-cyan-300"
                      : "text-gray-600 dark:text-slate-400"
                  }`}>
                  Task Management
                </h2>
              </Link>
            </li>
          </ul>

          {/* Navigation  */}
        </div>
        {/* Sidebar or Navigation */}
      </div>
      {/* for mobile version  */}

      <div className="md:hidden">
        <Drawer open={menubarOpen} onClose={closeMenu}>
          <Drawer.Header />
          <Drawer.Items>
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
                  <span className="text-cyan-500 font-extrabold text-[28px]">
                    X
                  </span>
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
                <li>
                  <Link
                    href={"/"}
                    className={` rounded-md flex  items-center gap-2 cursor-pointer    ${
                      pathname === "/"
                        ? "bg-cyan-200/20 dark:bg-cyan-400/20 border-2 border-cyan-400/20 dark:border-teal-500/30 hover:bg-cyan-300/30 hover:dark:bg-cyan-500/20 "
                        : " dark:bg-transparent hover:bg-gray-200 hover:dark:bg-slate-800 "
                    } ${
                      menubarOpen
                        ? "py-1 px-5 dark:bg-cyan-400/20 border  dark:border-slate-500 hover:bg-gray-200 hover:dark:bg-slate-800 "
                        : ""
                    }`}>
                    <FcPositiveDynamic className={` size-10`} />
                    <h2
                      className={`text-sm font-medium  capitalize ${
                        menubarOpen ? "block" : "hidden"
                      } ${
                        pathname === "/"
                          ? "text-cyan-600 dark:text-cyan-300"
                          : "text-gray-600 dark:text-slate-400"
                      }`}>
                      Dashboard
                    </h2>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/user"}
                    className={` rounded-md flex  items-center gap-2 cursor-pointer    ${
                      pathname === "/user"
                        ? "bg-cyan-200/20 dark:bg-cyan-400/20 border-2 border-cyan-400/20 dark:border-teal-500/30 hover:bg-cyan-300/30 hover:dark:bg-cyan-500/20 px-5 py-1  "
                        : " dark:bg-transparent hover:bg-gray-200 hover:dark:bg-slate-800 "
                    } ${
                      menubarOpen
                        ? "py-1 px-5 dark:bg-cyan-400/20 border  dark:border-slate-500 hover:bg-gray-200 hover:dark:bg-slate-800 "
                        : ""
                    }`}>
                    <FcConferenceCall className={` size-10`} />
                    <h2
                      className={`text-sm font-medium  capitalize ${
                        menubarOpen ? "block" : "hidden"
                      } ${
                        pathname === "/user"
                          ? "text-cyan-600 dark:text-cyan-300"
                          : "text-gray-600 dark:text-slate-400"
                      }`}>
                      User
                    </h2>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/product"}
                    className={` rounded-md flex  items-center gap-2 cursor-pointer    ${
                      pathname === "/product"
                        ? "bg-cyan-200/20 dark:bg-cyan-400/20 border-2 border-cyan-400/20 dark:border-teal-500/30 hover:bg-cyan-300/30 hover:dark:bg-cyan-500/20 px-5 py-1  "
                        : " dark:bg-transparent hover:bg-gray-200 hover:dark:bg-slate-800 "
                    } ${
                      menubarOpen
                        ? "py-1 px-5 dark:bg-cyan-400/20 border  dark:border-slate-500 hover:bg-gray-200 hover:dark:bg-slate-800 "
                        : ""
                    }`}>
                    <FcPaid className={` size-10`} />
                    <h2
                      className={`text-sm font-medium  capitalize ${
                        menubarOpen ? "block" : "hidden"
                      } ${
                        pathname === "/product"
                          ? "text-cyan-600 dark:text-cyan-300"
                          : "text-gray-600 dark:text-slate-400"
                      }`}>
                      Product
                    </h2>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/task"}
                    className={` rounded-md flex  items-center gap-2 cursor-pointer    ${
                      pathname === "/task"
                        ? "bg-cyan-200/20 dark:bg-cyan-400/20 border-2 border-cyan-400/20 dark:border-teal-500/30 hover:bg-cyan-300/30 hover:dark:bg-cyan-500/20 px-5 py-1  "
                        : " dark:bg-transparent hover:bg-gray-200 hover:dark:bg-slate-800 "
                    } ${
                      menubarOpen
                        ? "py-1 px-5 dark:bg-cyan-400/20 border  dark:border-slate-500 hover:bg-gray-200 hover:dark:bg-slate-800 "
                        : ""
                    }`}>
                    <FcParallelTasks className={` size-10`} />
                    <h2
                      className={`text-sm font-medium  capitalize ${
                        menubarOpen ? "block" : "hidden"
                      } ${
                        pathname === "/task"
                          ? "text-cyan-600 dark:text-cyan-300"
                          : "text-gray-600 dark:text-slate-400"
                      }`}>
                      Task Management
                    </h2>
                  </Link>
                </li>
              </ul>

              {/* Navigation  */}
            </div>
          </Drawer.Items>
        </Drawer>
      </div>

      {/* for mobile version  */}
    </>
  );
};

export default SidebarComp;
