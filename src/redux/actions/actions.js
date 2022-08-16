import { types, typeSign } from "../types/types";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

export const AgregarDatos = (persona) => {
    return{
        type: typeSign.agregar,
        payload: persona
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup( auth, provider )
        .then( ({user: {displayName, email, photoURL}}) => dispatch(loginProvider(displayName, email, photoURL)) )
        .catch((error) => {
            console.log(error);
          });
    }
}
const loginProvider = ( displayName, email, photoURL ) => {
    return {
        type: types.login,
        payload: {
            displayName,
            email,
            photoURL
        }
    }
}
