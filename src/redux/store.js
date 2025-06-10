import { configureStore } from "@reduxjs/toolkit";
import prodsReducer from "./prodSlice";
import favReducer from "./favSlice";

const store = configureStore({
    reducer: {
        productos: prodsReducer,
        favoritos: favReducer
    }
});

export default store;