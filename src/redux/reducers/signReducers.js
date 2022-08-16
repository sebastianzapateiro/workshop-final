
import { types } from "../types/types";




export const signReducers = (state = {}, action) => {
    switch (action.type) {
        case types.agregar:
            return {
                valoresUsuario: [...state.valoresUsuario, action.payload]
            }
        case types.login:
            return action.payload;    
            
        default:
            return state;
    }
}