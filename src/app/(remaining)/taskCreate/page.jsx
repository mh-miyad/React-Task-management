"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TaskCreatePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-[95%] mx-auto max-w-2xl container  bg-gray-100 p-5">
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="mb-3 ">
            <Label htmlFor="titleOfTask" className={`text-xl`}>
              Title of Task{" "}
            </Label>
            <Input
              className="my-2"
              placeholder="Title of Task"
             {...register("titleOfTask", { required: true })}
            />
            {errors.titleOfTask && <span>{errors.titleOfTask.message}</span>}
          </div> */}
          {/* <div className="mb-3 ">
            <Label htmlFor="descriptionOfTask" className={`text-xl`}>
              Title of Task{" "}
            </Label>
            <Input
              className="my-2"
              placeholder="Title of Task"
              {...register("descriptionOfTask", { required: true })}
            />
            {errors.descriptionOfTask && (
              <span>{errors.descriptionOfTask.message}</span>
            )}
          </div>
          <div className="mb-3 ">
            <Label htmlFor="statusOfTask" className={`text-xl`}>
              Status of Task{" "}
            </Label>
            <Select
              id="statusOfTask"
              {...register("statusOfTask", { required: true })}>
              <SelectTrigger className="w-full my-2">
                <SelectValue placeholder="Status of Task" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="on-going">On going</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>

            {errors.statusOfTask && <span>{errors.statusOfTask.message}</span>}
          </div> */}
          <input
            type="text"
            name="titleOfTask"
            id="titleOfTask"
            {...register("titleOfTask", { required: true })}
          />
          <input type="submit" className="bg-white p-5" />
        </form>
      </>
    </div>
  );
};

export default TaskCreatePage;
