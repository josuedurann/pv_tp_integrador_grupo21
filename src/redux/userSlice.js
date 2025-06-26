import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('sessionUser'),
    reducers: {
        limpiar: (state, action) => {
            return null
        }
    }
});

export const { getSession, limpiar } = userSlice.actions;

export default userSlice.reducer;