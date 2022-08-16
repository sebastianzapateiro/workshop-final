import React from 'react';
import {Section5,H2,Subsec5,Section3} from '../../styles/home.js';
import CardProduct from '../CardProduct.jsx';

const Recently = () => {
    return (
        <div>
    <Section5>
         <H2>Recently viewed</H2>
        <Subsec5>
        <CardProduct/>
        <CardProduct/>
        </Subsec5>
   </Section5>
    <Section3>
         <H2>Recommended to you</H2>
        <Subsec5>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
        </Subsec5>
    </Section3>
   
    </div>

    );
};

export default Recently;