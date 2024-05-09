"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { Select } from "flowbite-react";

const TaskCreatePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            <Select id="countries" {...register("status")}>
              <option value={"pending"}>Pending</option>
              <option value={"onGoing"}>On Going</option>
              <option value={"review"}>Review</option>
              <option value={"complete"}>Complete</option>
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
