import React from 'react';

const CardProduct = ({ name, price, distance }) => {
    return (
        <div className='card-product'>
            <img src="" alt="not found"  className='card-product-img'/>
            <footer className='card-product-text'>
                <h2>{`${price} $`}</h2>
                <div>
                    <h3 className='grey'>{ name }</h3>
                    <h3>Icon { distance } km</h3>
                </div>
            </footer>
        </div>
    );
};

export default CardProduct;