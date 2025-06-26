import { createSlice } from "@reduxjs/toolkit";

const prodSlice = createSlice({
    name: 'productos',
    initialState: [],
    reducers: {
        setProductos: (state, action) => {
            return action.payload
        },
        actualizarProducto: (state, action) => {
            const updateUser = action.payload;
            const index = state.findIndex((user) => user.id === updateUser.id);
            if (index !== -1) {
                state[index] = updateUser;
            }
        }
    }
});

export const { setProductos, actualizarProducto } = prodSlice.actions;

export default prodSlice.reducer;