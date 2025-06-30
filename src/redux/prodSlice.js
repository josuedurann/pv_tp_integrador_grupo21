import { createSlice } from "@reduxjs/toolkit"; // una función de Redux Toolkit que automáticamente crea:El estado,Los reducers y las acciones

const prodSlice = createSlice({
    name: 'productos', // nombre del slice
    initialState: [],
    reducers: {
        setProductos: (state, action) => {
            return action.payload
        }, //setProductos reemplaza todo el estado actual con el payload. O sea: setea la lista completa de productos
        actualizarProducto: (state, action) => {
            const updateUser = action.payload;
            const index = state.findIndex((user) => user.id === updateUser.id); //  busca el índice del producto que querés actualizar.
            if (index !== -1) {
                state[index] = updateUser; // modifica directamente ese producto en el array.
            }
        } //busca un producto por ID y lo reemplaza con su nueva versión.
    }
});

export const { setProductos, actualizarProducto } = prodSlice.actions;

export default prodSlice.reducer;