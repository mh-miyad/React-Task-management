import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Card } from "../ui/card";

const LoadTask = () => {
  return (
    <div className=" sm:max-w-xs 2xl:max-w-sm w-full mx-auto">
      <Card className={`border-gay-500 dark:border-gray-600`}>
        <Skeleton className={`w-full h-52 `} />
      </Card>
    </div>
  );
};

export default LoadTask;
