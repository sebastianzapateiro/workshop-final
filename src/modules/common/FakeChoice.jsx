import React from 'react';

import '../../styles/sass/FakeCaroulcelChoice.scss'

import logo from '../../assets/Logo.png'

import Caroucel from './Caroucel';
import ChoiceGener from '../ChoiceGener';

const FakeChoice = ({ children, main_text, nextPage, beforePage, captureThis }) => {

    const handleSubmit = e =>{
        e.preventDefault()
        //captureThis()
        nextPage()
    }

    return (
        <form className='fake' onSubmit={ handleSubmit }>
            <img src={ logo } alt="" />
            <h4 className='main-text'>{main_text}</h4>
            { children }
            <button type="submit">Next</button>
        </form>
    );
};




export default FakeChoice;