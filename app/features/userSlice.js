import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CryptoJS from "react-native-crypto-js";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-key";

export const login = createAsyncThunk("user/login", async (payload) => {
  const userData = await userApi.login(payload);

  userData.tokenID = userData.tokenID.toString();
  userData.id = CryptoJS.AES.encrypt(
    JSON.stringify(userData.id),
    userData.tokenID
  ).toString();
  userData.company = CryptoJS.AES.encrypt(
    JSON.stringify(userData.company),
    userData.tokenID
  ).toString();
  userData.firstName = CryptoJS.AES.encrypt(
    userData.firstName,
    userData.tokenID
  ).toString();
  userData.lastName = CryptoJS.AES.encrypt(
    userData.lastName,
    userData.tokenID
  ).toString();
  userData.username = CryptoJS.AES.encrypt(
    userData.username,
    userData.tokenID
  ).toString();
  userData.email = CryptoJS.AES.encrypt(
    userData.email,
    userData.tokenID
  ).toString();
  userData.language = CryptoJS.AES.encrypt(
    userData.language,
    userData.tokenID
  ).toString();
  userData.servers = CryptoJS.AES.encrypt(
    JSON.stringify(userData.servers),
    userData.tokenID
  ).toString();
  userData.userRoles = CryptoJS.AES.encrypt(
    userData.userRoles,
    userData.tokenID
  ).toString();
  await AsyncStorage.setItem(StorageKeys.USER, JSON.stringify(userData));
  return userData;
});

export const logout = createAsyncThunk("user/logout", async (payload) => {
  await userApi.logout(payload);
  await AsyncStorage.removeItem(StorageKeys.USER);
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    setInitialState(state, action) {
      state.userData = JSON.parse(action.payload);
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [logout.fulfilled]: (state) => {
      state.userData = null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { setInitialState } = actions;
export default reducer;
