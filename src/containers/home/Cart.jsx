import React from 'react';
import CardProductAD from '../../modules/CardProductAD';

import '../../styles/sass/GeneritView.scss'

const Cart = () => {

    const handleOnClick = e => {
        console.log('Esto se va a descontrolar')
    }
    return (
        <div className='generit-f-c'>
            <h2 className='text-main'>Favorite</h2>
            <div className="generit-container">
                <CardProductAD name={'Come comida 3000'} price={ Math.PI } distance={35}/>
                <CardProductAD name={'Come comida 3000'} price={ 5000 } distance={35}/>
            </div>
            <button className="buyProducts" onClick={ handleOnClick }>Comprar</button>
        </div>
    );
};

export default Cart;