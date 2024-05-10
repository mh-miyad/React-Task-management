import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const UseGetData = () => {
  const baseUrl =
    "https://react-task-management-weld.vercel.app/api/addtask" ||
    "http://localhost:3000";
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"], // Unique identifier for your query
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/api/addtask`);
      return response.data;
    },
  });

  return {
    isPending,
    error,
    data,
  };
};

export default UseGetData;
