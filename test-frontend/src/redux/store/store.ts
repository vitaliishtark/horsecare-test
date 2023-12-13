import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import employeesSlice from "../slices/employeesSlice";

const store = configureStore({
    reducer: {
        employees: employeesSlice,
    },
  });
  
  export default store;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;