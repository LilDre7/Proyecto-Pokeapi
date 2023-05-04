import { createSlice } from "@reduxjs/toolkit";

const nameTrainer = createSlice({
  name: "nameTrainer",
  initialState: localStorage.getItem("nameTrainer") || "",
  reducers: {
    setNameTrainer: (state, action) => {
      localStorage.setItem("nameTrainer", action.payload);
      return action.payload;
    },
  },
});

export const { setNameTrainer } = nameTrainer.actions;

export default nameTrainer.reducer;
