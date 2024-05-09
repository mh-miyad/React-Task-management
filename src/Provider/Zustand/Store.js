import { create } from "zustand";

const menuStore = create((set) => ({
  //  Add Here State
  menubarOpen: false,
  modal: false,
  allTask: [],
  backlog: [],
  onGoing: [],
  done: [],
  needToDo: [],

  //   State End Here
  //! Add Here Function
  openMenu: () => set((state) => ({ menubarOpen: !state.menubarOpen })),
  closeMenu: () => set((state) => ({ menubarOpen: (state = false) })),
  // modal
  isOpen: () => set((state) => ({ modal: !state.modal })),

  // modal
  //!  Function End Here
}));

export default menuStore;


