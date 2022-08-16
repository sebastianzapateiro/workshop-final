import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.png'

import '../../styles/sass/PhoneVerification.scss'





const PhoneVerification = () => {
    const number1 = useRef('');
    const number2 = useRef('');
    const number3 = useRef('');
    const number4 = useRef('');
    const number5 = useRef('');
    const number6 = useRef('');
      

const validatePhone = (e) => {
    e.preventDefault();
console.log(number1.current.value)
    let confirmationResult = window.confirmationResult;
    confirmationResult.confirm(number1.current.value+number2.current.value+number3.current.value+number4.current.value+number5.current.value+number6.current.value).then((result) => {
        
        window.alert("¡El código ingresado es valido!")

    })
        .catch((error) => {
            console.log(error)
        })


}

    const handleOnChange = (e) => {
        const x = parseInt(e.target.name)
        const y = parseInt(e.target.value)

        if (!isNaN(y)) {
            if (x != 7) {
                document.getElementById('verification-' + (x + 1)).focus()
                document.getElementById('verification-' + (x + 1)).select()
            }
        } else { e.target.value = '' }
    }

    const handleOnClick = e => {
        e.target.value = ""
    }

    return (
        <div className='phone-verification'>
            <img src={Logo} alt="" />
            <h1>Phone verification</h1>
            <h2>Enter the four-digit code from SMS
                SMS not received <Link to="/init/sign-up">Send again?</Link></h2>

            <form onSubmit={validatePhone}>
                <div id='verification'>
                    <input ref={number1} type="text" name="1" id="verification-1"
                        maxLength={1} autoFocus
                        onChange={handleOnChange} onClick={handleOnClick} />
                    <input ref={number2} type="text" name="2" id="verification-2" maxLength={1}
                        onChange={handleOnChange} onClick={handleOnClick} />
                    <input ref={number3} type="text" name="3" id="verification-3" maxLength={1}
                        onChange={handleOnChange} onClick={handleOnClick} />
                    <input ref={number4} type="text" name="4" id="verification-4" maxLength={1}
                        onChange={handleOnChange} onClick={handleOnClick} />
                    <input ref={number5} type="text" name="5" id="verification-5" maxLength={1}
                        onChange={handleOnChange} onClick={handleOnClick} />
                    <input ref={number6} type="text" name="6" id="verification-6" maxLength={1}
                        onChange={handleOnChange} onClick={handleOnClick} />
                </div>

                <button type="submit" id='verification-5' >Confirm</button>
            </form>
        </div>
    );
};

export default PhoneVerification;