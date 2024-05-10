import UseGetData from "@/Hooks/UseGetData";
import axios from "axios";
import { all } from "axios";
import { create } from "zustand";

const menuStore = create((set) => ({
  //  Add Here State
  menubarOpen: false,
  modal: false,
  allTaskCaching: [],
  backlog: [],
  onGoing: [],
  done: [],
  needToDo: [],
  id: [],

  //   State End Here
  //! Add Here Function
  openMenu: () => set((state) => ({ menubarOpen: !state.menubarOpen })),
  closeMenu: () => set((state) => ({ menubarOpen: (state = false) })),
  // modal
  isOpen: () => set((state) => ({ modal: !state.modal })),

  //  Send To Database

  sendPOSTapi: (data) =>
    set(async (state) => {
      axios
        .post("http://localhost:3000/api/addtask", data)
        .then((response) => {
          if (response.data) {
            allTaskCaching: state.allTaskCaching.push(data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }),

  //  Get From Database
  getId: (id) =>
    set((state) => {
      const findId = state.allTaskCaching.filter((task) => task._id === id);
      const statusOfTask = findId[0].status;
      // if (statusOfTask === "pending") {
      //   statusOfTask === "onGoing";
      // } else if (statusOfTask === "onGoing") {
      //   statusOfTask === "review";
      // } else if (statusOfTask === "review") {
      //   statusOfTask === "complete";
      // }
    }),

  //  Send To Database
}));

export default menuStore;

// ====================Task management Start here====================
