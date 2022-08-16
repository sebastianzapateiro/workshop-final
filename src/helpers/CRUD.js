

import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";


export const enviarDatos = async (datos,id) =>{
    
    await setDoc(doc(db, "datosUsuario", id), datos);

}

export const readProducts = async () =>{
    try{
        console.log('here')
        const arr = []
        const products = collection( db, 'productos')
        const list = await getDocs(products);
        list.docs.map(
            doc => {
                console.log( doc.data() )
                arr.push( doc.data() )
            }
        );
        return arr

    }catch( e ){
        console.error( e )
    }
    

}