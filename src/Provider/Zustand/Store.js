import { create } from "zustand";

const useStore = create((set) => ({
  //  Add Here State
  menubarOpen: false,
  user: [],
  //   State End Here
  //! Add Here Function
  openMenu: () => set((state) => ({ openMenu: !state.menubarOpen })),
  //!  Function End Here
}));

export default useStore;
