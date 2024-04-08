import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: "menuStat",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenuStat: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenuStat } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
