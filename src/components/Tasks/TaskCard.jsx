"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoArrowRight } from "react-icons/go";
const TaskCard = () => {
  const [badgeTitle, setBadgeTitle] = useState("Research");
  return (
    <div className=" max-w-xs 2xl:max-w-sm w-full mx-auto">
      <Card
        className={`${
          badgeTitle === "Design"
            ? "border-indigo-500"
            : badgeTitle === "Research"
            ? "border-sky-500"
            : "border-orange-500"
        }`}>
        <CardHeader>
          <Badge
            className={`${
              badgeTitle === "Design"
                ? "bg-indigo-500"
                : badgeTitle === "Research"
                ? "bg-sky-500"
                : "bg-orange-500"
            } py-1.5 px-5 rounded-full max-w-fit text-sm dark:text-white`}>
            {badgeTitle || "Design"}
          </Badge>

          <CardTitle className="text-xl my-3 font-normal text-gray-600 dark:text-sky-100">
            Copywriting Content
          </CardTitle>
          <CardDescription className="text-sm capitalize truncate dark:text-sky-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Badge
            className={`rounded bg-slate-50 text-slate-900 text-sm px-3 py-1`}>
            Aug 20, 2021
          </Badge>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center  ">
            <Avatar
              className={`-ml-2.5  dark:ring-white size-8 cursor-pointer hover:scale-110 transition-all duration-100 ease-linear`}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar
              className={`-ml-2.5  dark:ring-white size-8 cursor-pointer hover:scale-110 transition-all duration-100 ease-linear`}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar
              className={`-ml-2.5  dark:ring-white size-8 cursor-pointer hover:scale-110 transition-all duration-100 ease-linear`}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <button
              className={` bg-slate-100 dark:bg-black/5  text-sm px-3 py-1 rounded-md border-2 ${
                badgeTitle === "Design"
                  ? "border-indigo-500 text-indigo-400"
                  : badgeTitle === "Research"
                  ? "border-sky-500 text-sky-600"
                  : "border-orange-500 text-orange-600"
              }`}>
              <GoArrowRight className="size-5" />
            </button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TaskCard;
