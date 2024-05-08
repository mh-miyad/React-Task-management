"use client";
import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import menuStore from "@/Provider/Zustand/Store";
import ModalComp from "../Modal/ModalComp";

const TaskBar = () => {
  const { isOpen } = menuStore();
  return (
    <>
      <div className="bg-white/5 backdrop-blur-lg dark:bg-transparent dark:backdrop-blur-md border p-4 border-indigo-600/30 rounded-lg mx-5">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold text-neutral-600 capitalize dark:text-white">
            {" "}
            Backlog
          </h3>
          <div className="flex items-center gap-4">
            <button>
              <HiOutlineDotsHorizontal className={`size-6`} />
            </button>
            <button
              className="border bg-indigo-500/5 rounded border-indigo-600/50 p-1"
              onClick={isOpen}>
              <FiPlus className={`size-5`} />
            </button>
          </div>
        </div>
      </div>
      <ModalComp />
    </>
  );
};

export default TaskBar;
