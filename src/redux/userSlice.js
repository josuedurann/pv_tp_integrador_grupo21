import { createSlice } from "@reduxjs/toolkit"; //crear una "rebanada" del estado global: en este caso, la parte del usuario.  una función de Redux Toolkit que automáticamente crea:El estado,Los reducers y las acciones

const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('sessionUser'), // El estado inicial se obtiene desde el localStorage, buscando una clave "sessionUser".
    reducers: {
        limpiar: (state, action) => { 
            return null
        } // Reemplaza el estado actual del usuario por null. Es como un logout: borra los datos del usuario en memoria (aunque no en el localStorage…)
    }
});

export const { getSession, limpiar } = userSlice.actions;

export default userSlice.reducer;