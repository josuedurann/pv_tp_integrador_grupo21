import { createSlice } from "@reduxjs/toolkit"; // función sirve para crear el reducer, las acciones y el estado inicial de forma automática y elegante.

const favSlice = createSlice({
    name: 'favoritos',
    initialState: [],
    reducers: {
        clickFavorito: (state, action) => {
            const id = action.payload; //Guardás en la variable id el dato que llega en la acción.Ese dato es el ID del producto que se clickeó.
            if (state.includes(id)) { // Verifica si ese id ya está en la lista de favoritos.
                return state.filter((p) => p !== id); //Usás .filter() para sacar ese ID del array. Devolvés un nuevo array, sin ese ID.
            } else {
                state.push(id); // Usás .push() para agregar ese ID al array de favoritos.
            }
        }
    }
});

export const { clickFavorito } = favSlice.actions;

export default favSlice.reducer;