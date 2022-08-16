import React from 'react';
import CardProductAD from '../../modules/CardProductAD';

import '../../styles/sass/GeneritView.scss'


import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { db } from '../../firebase-config'
import { useEffect } from 'react';
import { readProducts } from '../../helpers/CRUD';
import { useState } from 'react';

const Cart = () => {

    const [ products, setProducts ] = useState([])
    
    useEffect( () =>{
        readProducts()
            .then( x => setProducts( x ))
            .catch( e => console.error(e))

        //console.log( products )
    },[])

    const handleOnClick = e => {
        console.log('Esto se va a descontrolar')
    }

    return (
        <div className='generit-f-c'>
            <h2 className='text-main'>Favorite</h2>
            <div className="generit-container">
                {/* <CardProductAD name={'Come comida 3000'} price={ Math.PI } distance={35}/>
                <CardProductAD name={'Come comida 3000'} price={ 5000 } distance={35}/> */}
                {
                    products.map( e => {
                        return(
                            <CardProductAD name={ e.nombre } price={ e.precio } 
                                distance={ e.distancia }/>
                        )
                    })
                }
            </div>
            <button className="buyProducts" onClick={ handleOnClick }>Comprar</button>
        </div>
    );
};

export default Cart;