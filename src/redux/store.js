import { configureStore } from "@reduxjs/toolkit"; // función configureStore, que se usa para crear el store global
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