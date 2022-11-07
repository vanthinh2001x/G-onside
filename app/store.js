import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import translateReducer from "./features/translateSlice";
const rootReducer = {
  user: userReducer,
  translate: translateReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
