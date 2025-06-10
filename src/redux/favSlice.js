import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'favoritos',
    initialState: [],
    reducers: {
        clickFavorito: (state, action) => {
            const id = action.payload;
            if (state.includes(id)) {
                return state.filter((p) => p !== id);
            } else {
                state.push(id);
            }
        }
    }
});

export const { clickFavorito } = favSlice.actions;

export default favSlice.reducer;