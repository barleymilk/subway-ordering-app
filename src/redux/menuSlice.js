import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItem: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setSelectedItem(state, action) {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = menuSlice.actions;
export default menuSlice.reducer;
