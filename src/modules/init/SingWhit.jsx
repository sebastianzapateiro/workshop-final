import React from 'react';

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInWithFacebook, signInWithGoogle } from '../../firebase-config';
import { loginGoogle } from '../../redux/actions/actions';

import '../../styles/sass/SingWhit.scss'

import '../../styles/sass/SingWhit.scss'

const SingWhit = ({ children }) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogle = () => {
        dispatch(loginGoogle())
      
    }

    return (
        <div className="sing-whit">
            <h2>{ children }</h2>
            <div className="sing-whit-icon">
                <FcGoogle onClick={handleGoogle} size={25}/>
                
            </div>
        </div>
    );
};

export default SingWhit;