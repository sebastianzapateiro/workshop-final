

import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";


export const enviarDatos = async (datos,id) =>{
    
    await setDoc(doc(db, "datosUsuario", id), datos);

}