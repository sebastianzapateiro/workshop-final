import React from 'react';
import CardProductAD from '../../modules/CardProductAD';

import '../../styles/sass/GeneritView.scss'

const Favorite = () => {
    return (
        <div className='generit-f-c'>
            <h2 className='text-main'>Favorite</h2>
            <div className="generit-container">
                <CardProductAD name={'Come comida 3000'} price={ Math.PI } distance={35}/>
                <CardProductAD name={'Come comida 3000'} price={ Math.PI } distance={35}/>
            </div>
        </div>
    );
};

export default Favorite;