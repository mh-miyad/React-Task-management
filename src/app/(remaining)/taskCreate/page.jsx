"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { Select } from "flowbite-react";
import axios from "axios";
import menuStore from "@/Provider/Zustand/Store";

const TaskCreatePage = () => {
  const { sendPOSTapi, allTaskCaching } = menuStore();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    sendPOSTapi(data);

    reset();
  };

  return (
    <div className="w-[95%] mx-auto max-w-2xl container  bg-gray-100 dark:bg-slate-800 p-5">
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="titleOfTask" className={`text-xl`}>
              Title of Task
            </Label>
            <Input
              {...register("titleOfTask", { required: true })}
              className="my-2"
            />
          </div>
          <div>
            <Label htmlFor="descriptionOfTask" className={`text-xl`}>
              Description of Task
            </Label>
            <Input
              {...register("descriptionOfTask", { required: true })}
              className="my-2"
            />
          </div>
          <div className="my-3 ">
            <Label htmlFor="StatusOfTask" className={`text-xl`}>
              Status
            </Label>
            <Select
              id="StatusOfTask"
              {...register("status")}
              color={``}
              className="my-2 dark:bg-slate-900 ">
              <option value={"pending"}>Pending</option>
              <option value={"onGoing"}>On Going</option>
              <option value={"review"}>Review</option>
              <option value={"complete"}>Complete</option>
            </Select>
          </div>
          <div className="my-3 ">
            <Label htmlFor="labelOfTask" className={`text-xl`}>
              Category
            </Label>
            <Select
              color={`white`}
              id="labelOfTask"
              {...register("label")}
              className="my-2 ">
              <option value={"research"}>Research</option>
              <option value={"design"}>Design</option>
              <option value={"planning"}>Planning</option>
            </Select>
          </div>

          <Button
            type="submit"
            className={`bg-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 hover:bg-cyan-600  text-white`}>
            Submit
          </Button>
        </form>
      </>
    </div>
  );
};

export default TaskCreatePage;
