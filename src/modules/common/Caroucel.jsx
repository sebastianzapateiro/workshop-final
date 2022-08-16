import React from 'react';

import '../../styles/sass/Caroucel.scss'

const Caroucel = ( { valueName, defaultValue, valueMin, valueMax } ) => {
    const id_min = [ 'minus-1', 'minus-2', 'minus-3' ]
    const id_max = [ 'max-1', 'max-2', 'max-3' ]

    const handleOnChange = e => {
        let x = parseInt(e.target.value)
        x < 80 ?x=80 :x
        x > 250 ?x=250 :x
        if( x ){
            for (let i = 0; i < 3; i++) {
                document.getElementById( id_min[i] ).innerText = x - 1 - i
                document.getElementById( id_max[i] ).innerText = x + 1 + i
            }
        }
    }

    const handleOnClick = e => {
        let x = parseInt(e.target.innerText)
        x < valueMin ?x=valueMin :x
        x > valueMax ?x=valueMax :x
        document.getElementById('number').value = x
        for (let i = 0; i < 3; i++) {
            document.getElementById( id_min[i] ).innerText = x - 1 - i
            document.getElementById( id_max[i] ).innerText = x + 1 + i
        }
    }
    return(
        <div className='caroucel'>
            <h4 id='minus-3' onClick={handleOnClick}>{ defaultValue - 3 }</h4>
            <h3 id='minus-2' onClick={handleOnClick}>{ defaultValue - 2 }</h3>
            <h2 id='minus-1' onClick={handleOnClick}>{ defaultValue - 1 }</h2>
            <div className='efimero'>
                <input
                    type="number" name=""
                    id="number" defaultValue={ defaultValue }
                    max={ valueMax } min={ valueMin }
                    onChange={ handleOnChange }
                    />
                <p>{valueName}</p>
            </div>
            <h2 id='max-1' onClick={handleOnClick}>{ defaultValue + 1 }</h2>
            <h3 id='max-2' onClick={handleOnClick}>{ defaultValue + 2 }</h3>
            <h4 id='max-3' onClick={handleOnClick}>{ defaultValue + 3 }</h4>
        </div>
    );
}

export default Caroucel