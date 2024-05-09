import mongoose, { Schema } from "mongoose";
const taskSchema = new Schema({
  title: String,
  description: String,
  status: String,
});
const TaskModel = mongoose.models?.Task || mongoose.model("Task", taskSchema);

export default TaskModel;
