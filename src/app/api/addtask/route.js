import dbConfig from "@/Database/dbConfig";
import TaskModel from "@/Database/Model/TaskModel";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  await dbConfig();
  const allTask = await TaskModel.find({});
  return NextResponse.json({ data: allTask });
};
export const POST = async (req, res) => {
  await dbConfig();
  const { titleOfTask, status, descriptionOfTask, label } = await req.json();

  const taskData = new TaskModel({
    title: titleOfTask,
    description: descriptionOfTask,
    status: status,
    label: label,
  });

  await taskData.save();

  return NextResponse.json({ message: "Task Added " });
};
