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
import NavHome from '../containers/test/NavHome';
import UserEdit from '../containers/init/UserEdit';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import HomeBuy from '../containers/HomeBuy/HomeBuy';
import Cart from '../containers/home/Cart';
import Favorite from '../containers/home/Favorite';


const AppRouters = () => {
    const [auth, setAuth] = useState(true);
    const usuario = useSelector(store => store.valoresUsuario)

    useEffect(()=>{
        console.log(usuario);
    })

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                console.log(user);

                setAuth(true)
            } else {
                setAuth(false)
            }
        })
    }, [])


    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Init />} />
                <Route path="*" element={<Init />} />
                <Route path="/init/welcome" element={<Welcome />} />
                <Route path="/init/sing-in"
                    element={<SingIn />} />
                <Route path="/init/sign-up" element={<SignUp />} />
                <Route path="/init/phone" element={<PhoneVerification />} />
                <Route path="/init/choice" element={<Choices />} />
                {/* test */}
                <Route path="/favorite" element={ <Favorite/> }/>
                <Route path="/cart" element={ <Cart/> }/>

                <Route path='/init/phone-verification' element={<PrivateRouter isAutentication={auth}> <PhoneVerification /> </PrivateRouter>} />
                <Route path="/init/user/:userId" element={<UserEdit />} />
                <Route path="/init/profile" element={
                    <PrivateRouter isAutentication={auth}>
                        <NavHome />
                    </PrivateRouter>
                } />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;