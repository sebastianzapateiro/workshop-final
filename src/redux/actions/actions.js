import { types, typeSign } from "../types/types";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase-config";

export const AgregarDatos = (persona) => {
    return {
        type: typeSign.agregar,
        payload: persona
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(({ user: { uid, displayName, email, photoURL } }) => {
                dispatch(loginProvider(uid, displayName, email, photoURL))
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
const loginProvider = (uid, displayName, email, photoURL) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            email,
            photoURL
        }
    }
}

