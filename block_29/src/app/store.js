import { configureStore } from "@reduxjs/toolkit";
import { puppyApi } from "../API/puppyApi";

export const store = configureStore({
    reducer: {
        puppyApi: puppyApi.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(puppyApi.middleware);
    }
});