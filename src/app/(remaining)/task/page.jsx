import TaskBar from "@/components/Tasks/TaskBar";
import TaskCard from "@/components/Tasks/TaskCard";
import React from "react";

const TaskPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-start gap-4 ">
        <div className="flex justify-center flex-col gap-4">
          <TaskBar title={"Pending"} />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        <div className="flex justify-center flex-col gap-4">
          <TaskBar title={"Ongoing"} />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        <div className="flex justify-center flex-col gap-4">
          <TaskBar title={"Finish "} />
          <TaskCard />
        </div>
        <div className="flex justify-center flex-col gap-4">
          <TaskBar title={" Done "} />
          <TaskCard />
        </div>
        <div className="hidden 2xl:block">
          <TaskBar title={" Archive "} />
        </div>
      </div>
    </>
  );
};

export default TaskPage;
