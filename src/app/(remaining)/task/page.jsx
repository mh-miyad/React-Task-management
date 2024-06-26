"use client";
import LoadTask from "@/components/Loading/LoadTask";
import TaskBar from "@/components/Tasks/TaskBar";
import TaskCard from "@/components/Tasks/TaskCard";
import UseGetData from "@/Hooks/UseGetData";
import menuStore from "@/Provider/Zustand/Store";
import React from "react";

const TaskPage = () => {
  const { data, error, isPending } = UseGetData();
  const { allTaskCaching } = menuStore();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-start gap-4 px-5  ">
        <div className="flex justify-center flex-col gap-4">
          <TaskBar title={"Pending"} />

          <>
            {isPending
              ? allTaskCaching.map((task) => {
                  return (
                    <>
                      <TaskCard
                        description={task?.description}
                        title={task?.title}
                        label={task?.label}
                        id={task?._id}
                        key={task?._id}
                      />
                    </>
                  );
                })
              : data?.data?.map((task) => {
                  return (
                    <>
                      <TaskCard
                        description={task?.description}
                        title={task?.title}
                        label={task?.label}
                        id={task?._id}
                        key={task?._id}
                      />
                    </>
                  );
                })}
          </>
        </div>
        <div className="flex justify-center flex-col gap-4">
          <TaskBar title={"Ongoing"} />
        </div>
        <div className="flex justify-center flex-col gap-4">
          <TaskBar title={"Review"} />
        </div>
        <div className="flex justify-center flex-col gap-4">
          <TaskBar title={" Complete "} />
        </div>
        <div className="hidden 2xl:block">
          <TaskBar title={" Archive "} />
        </div>
      </div>
    </>
  );
};

export default TaskPage;
