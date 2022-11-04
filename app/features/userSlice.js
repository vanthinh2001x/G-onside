import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-key";

export const setInitialState = createAsyncThunk("user/setUser", async () => {
  const userDataJson = await AsyncStorage.getItem(StorageKeys.USER);
  if (userDataJson) {
    const userData = JSON.parse(userDataJson);
    return userData;
  }
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const userData = await userApi.login(payload);
  const gtk = userData.jwtToken;
  delete userData.servers;
  delete userData.userRoles;
  delete userData.jwtToken;
  await AsyncStorage.setItem(StorageKeys.USER, JSON.stringify(userData));
  await AsyncStorage.setItem(StorageKeys.TOKEN, gtk);
  return userData;
});

export const logout = createAsyncThunk("user/logout", async (payload) => {
  await userApi.logout(payload);
  await AsyncStorage.removeItem(StorageKeys.USER);
  await AsyncStorage.removeItem(StorageKeys.TOKEN);
});
const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  extraReducers: {
    [setInitialState.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
    [logout.fulfilled]: (state) => {
      state.userData = null;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
