import React from 'react';
import Form from '../../modules/common/Form';
import SingWhit from '../../modules/init/SingWhit';
import { useDispatch } from 'react-redux';
import '../../styles/sass/SingIn.scss'
import RE from '../../tools/RE';
import { AgregarDatos } from '../../redux/actions/actions';
import { useSelector } from 'react-redux';
import { authentication } from '../../firebase-config'
import { RecaptchaVerifier, signInWithPhoneNumber, } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let flag = 0;


    const handleSubmit = (e) => {
        /**Colocar tu funcion aqui el sistema lo leera de forma automatica.
         * 
         */
        e.preventDefault()

        let obj = {}
        const inputs = e.target.querySelectorAll("input")

        let isOk = true

        inputs.forEach(element => {
            if (element.type === "tel") {
                if (RE.checkPhone(element.value)) {
                    obj[element.name] = element.value
                }
                else obj[element.name] = null
            }
            else if (element.type === 'password') {
                if (RE.checkPassword(element.value)) {
                    obj[element.name] = element.value;
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




        //Se almacenan los campos de Nombre, correo, telefono y contraseña a través de estados con Redux

        if (isOk) {

            
        }


        // Autententicación Firebase a través de Número de Telefono

        window.recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha',
            {
                size: 'invisible',
                callback: (response) => { },
            },
            authentication,
        )
        signInWithPhoneNumber(
            authentication,
            "+57" + obj["tel"]
            ,
            window.recaptchaVerifier,
        )
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult
                
                console.log(window.confirmationResult)
                
                console.log(obj);
                dispatch(AgregarDatos(obj))
                window.alert("¡Seras redireccionao!")
                navigate('/init/phone-verification');

            })
            .catch((error) => {

                window.alert(error)
            })


    }

    const usuario = useSelector(store => store.valoresUsuario)

    console.log(usuario, "Valor")

    const inputs = [
        {
            t: 'text',
            n: 'name',
            ph: 'Full name'
        },
        {
            t: 'email',
            n: 'email',
            ph: 'Email'
        },
        {
            t: 'tel',
            n: 'tel',
            ph: 'Phone number'
        },
        {
            t: 'password',
            n: 'pass',
            ph: 'Password'
        }
    ]

    return (
        <div>
            <Form inputs={inputs} btn_text='Registration'
                txt_main='Sing Up'
                txt_footer={{ h2: 'Forgot Password ?' }}
                handleSubmit={handleSubmit} />
            <div id="recaptcha"></div>

            <SingWhit>OR Sing In with</SingWhit>
        </div>
    );
};

export default SignUp;