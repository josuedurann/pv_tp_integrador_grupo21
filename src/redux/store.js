import { configureStore } from "@reduxjs/toolkit";
import prodsReducer from "./prodSlice";
import favReducer from "./favSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        productos: prodsReducer,
        favoritos: favReducer,
        user: userReducer
    }
});

export default store;