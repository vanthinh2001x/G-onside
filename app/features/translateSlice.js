import { createSlice } from "@reduxjs/toolkit";

const translateSlice = createSlice({
  name: "translate",
  initialState: {
    translateData: null,
  },
  reducers: {
    setTranslate(state, action) {
      state.translateData = action.payload;
    },
  },
});

const { actions, reducer } = translateSlice;
export const { setTranslate } = actions;
export default reducer;
