import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StorageKeys from "../../constants/storage-key";

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
