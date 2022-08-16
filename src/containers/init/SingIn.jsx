import React from 'react';
import Form from '../../modules/common/Form';

import Logo from '../../assets/Logo.png'

import '../../styles/sass/SingIn.scss'

import SingWhit from '../../modules/init/SingWhit';
import RE from '../../tools/RE';
import { AgregarDatos } from '../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SingIn = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        /**Colocar tu funcion aqui el sistema lo leera de forma automatica.
         * 
         */

        e.preventDefault()
        let obj = {}
        const inputs = e.target.querySelectorAll("input")

        let isOk = true

        inputs.forEach(element => {
            //console.log(element.type)
            if (element.type === "tel") {
                if (RE.checkPhone(element.value)) {
                    obj[element.name] = element.value
                }
                else obj[element.name] = null
            }
            else if (element.type === 'password') {
                if (RE.checkPassword(element.value)) {
                    obj[element.name] = element.value
                }
                else obj[element.name] = null
            }
            else if (element.type === 'text') {
                if (RE.checkName(element.value)) {
                    obj[element.name] = element.value
                }
                else obj[element.name] = null
            }
            else if (element.type === 'email') {
                if (RE.checkEmail(element.value)) {
                    obj[element.name] = element.value
                }
                else obj[element.name] = null
            }

            if (obj[element.name] == null) return isOk = false
        });


        if (isOk) {
            console.log(obj);
            dispatch(AgregarDatos(obj))
        }
    }

    const inputs = [
        {
            t: 'email',
            n: 'email',
            ph: 'Email'
        },
        {
            t: 'password',
            n: 'pass',
            ph: 'Password'
        }
    ]

    return (
        <div className='form-buffalo'>
            <img src={Logo} alt="" />
            <Form inputs={inputs} btn_text='Sing In'
                txt_main='Sing In'
                txt_footer={{ h2: 'Forgot Password ?' }}
                handleSubmit={handleSubmit} />
            <SingWhit>Sing In with</SingWhit>
            <h2 className='form-what'>
                D’ont have an account ? <Link to="/init/sign-up"> Sign Up </Link>
            </h2>
        </div>
    );
};

export default SingIn;