import React from 'react';

import '../styles/sass/CardProduct.scss'

const CardProductAD = ({ name, price, distance }) => {

    const handleOnClick = e =>{
        console.log('me estoy eliminando')
        const x = e.target.parentNode.parentNode
        x.remove()
    }

    return (
        <div className='card-product'>
            <img src="" alt="not found"  className='card-product-img'/>
            <div className='card-product-text'>
                <h2>{`${price} $`}</h2>
                <div className='info'>
                    <h3 className='grey'>{ name }</h3>
                    <h3>Icon { distance } km</h3>
                </div>
            </div>
            <footer className="card-product-footer">
                <button className='del' onClick={ handleOnClick }>Delete</button>
            </footer>
        </div>
    );
};

export default CardProductAD;