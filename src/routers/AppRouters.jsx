import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Init from '../containers/Init';
import Choices from '../containers/init/Choices';
import SingIn from '../containers/init/SingIn';
import SignUp from '../containers/init/SingUp';
import Welcome from '../containers/init/Welcome';
import PhoneVerification from '../containers/init/PhoneVerification';
import { PrivateRouter } from './PrivateRouter';
import { useSelector } from 'react-redux';

const AppRouters = () => {
const [auth, setAuth] = useState(true);
const usuario = useSelector(store => store.valoresUsuario)

    useEffect(()=>{
    console.log(usuario);

}, [])

    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={ <Init/> }/>
                <Route path="*" element={ <Init/> }/>
                <Route path="/init/welcome" element={ <Welcome/> }/>
                <Route path="/init/sing-in" 
                    element={ <SingIn/> }/>
                <Route path="/init/sign-up" element={ <SignUp/> }/>
                <Route path="/init/phone" element={ <PhoneVerification/> }/>
                <Route path="/init/choice" element={ <Choices/> }/>

                <Route path='/init/phone-verification' element={<PrivateRouter isAutentication={auth}> <PhoneVerification /> </PrivateRouter>} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;