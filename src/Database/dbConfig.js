import mongoose from "mongoose";

const dbConfig = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`, {
      dbName: "React_Task_Database",
    });
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};
export default dbConfig;
