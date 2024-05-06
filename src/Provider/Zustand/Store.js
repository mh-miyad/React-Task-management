import { create } from "zustand";

const menuStore = create((set) => ({
  //  Add Here State
  menubarOpen: false,
  user: [],
  //   State End Here
  //! Add Here Function
  openMenu: () => set((state) => ({ menubarOpen: !state.menubarOpen })),
  //!  Function End Here
}));

export default menuStore;
