import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const UseGetData = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"], // Unique identifier for your query
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/api/addtask");
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
