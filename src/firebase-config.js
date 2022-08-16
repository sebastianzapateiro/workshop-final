// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from "firebase/auth";
import { AgregarDatos } from "./redux/actions/actions";
import { useDispatch } from "react-redux";
import {getFirestore, collection, getDocs} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCls9WNpNMibDSIaf09EwW5vnw_Y349q-M",
  authDomain: "workshop-final-65cf4.firebaseapp.com",
  projectId: "workshop-final-65cf4",
  storageBucket: "workshop-final-65cf4.appspot.com",
  messagingSenderId: "335996890613",
  appId: "1:335996890613:web:9febdd1e54c10791ff84bc",
  measurementId: "G-9BR451K8MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);


const provider = new GoogleAuthProvider();



export const signInWithGoogle = () => {
  const dispatch = useDispatch();

  signInWithPopup(authentication, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("nome", name);
      localStorage.setItem("email", email);
      localStorage.setItem("fotoPerfil", profilePic);
      
      const usuario = {
        name,
        email,
        profilePic
      }

      dispatch(AgregarDatos(usuario))

      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const providerF = new FacebookAuthProvider();

export const signInWithFacebook = () => {


  signInWithPopup(authentication, providerF)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(result);
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}


//Implementando Firestore

// Inicialización de servicio Firestore
export const db = getFirestore();

// Referencia a colecciones

const colRef = collection(db, 'users');

// Obtener información

getDocs(colRef).then((snapshots)=>{

  console.log(snapshots.docs);

});