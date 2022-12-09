import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import translateReducer from "./features/translateSlice";
import photoModalReducer from "./features/photoModalSlice";
const rootReducer = {
  user: userReducer,
  translate: translateReducer,
  photoModal: photoModalReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
