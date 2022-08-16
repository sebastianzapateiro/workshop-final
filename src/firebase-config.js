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
  apiKey: "AIzaSyCrCktVh-HZOicfI2PFCTxZpu7PEBRODF4",
  authDomain: "bufaloapp-776b4.firebaseapp.com",
  projectId: "bufaloapp-776b4",
  storageBucket: "bufaloapp-776b4.appspot.com",
  messagingSenderId: "38844000198",
  appId: "1:38844000198:web:ce9b5808e60884fa2074c7",
  measurementId: "G-5TP3WLB7M8"
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
const db = getFirestore();

// Referencia a colecciones

const colRef = collection(db, 'users');

// Obtener información

getDocs(colRef).then((snapshots)=>{

  console.log(snapshots.docs);

});