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

const TaskCard = ({ title, description, label }) => {
  console.log(label);

  return (
    <div className=" sm:max-w-xs 2xl:max-w-sm w-full mx-auto">
      <Card
        className={`${
          label === "design"
            ? "bg-indigo-500"
            : label === "research"
            ? "bg-sky-500"
            : label === undefined || label === ""
            ? "border-red-500"
            : "border-green-500"
        }`}>
        <CardHeader>
          <Badge
            className={`${
              label === "design"
                ? "bg-indigo-500 hover:bg-indigo-600"
                : label === "research"
                ? "bg-sky-500 hover:bg-sky-600"
                : label === undefined || label === ""
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            } py-1.5 px-5 rounded-full cursor-pointer max-w-fit text-sm dark:text-white capitalize`}>
            {label || "no label"}
          </Badge>

          <CardTitle className="text-xl my-3 font-normal text-gray-600 dark:text-sky-100">
            {title}
          </CardTitle>
          <CardDescription className="text-sm capitalize truncate dark:text-sky-100">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Badge
            className={`rounded bg-slate-50 text-slate-900 text-sm px-3 py-1`}>
            Aug 20, 2024
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
                label === "design"
                  ? "border-indigo-500 text-indigo-400"
                  : label === "research"
                  ? "border-sky-500 text-sky-600"
                  : label === undefined || label === ""
                  ? "border-red-500 text-red-600"
                  : "border-green-400 text-green-600"
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
