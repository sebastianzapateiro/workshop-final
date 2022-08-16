import React from 'react';
import {Link} from 'react-router-dom';
import {Div10,Img6} from '../../styles/home.js';

import image1 from "../../Imagenes/house.png";
import image2 from "../../Imagenes/search.png";
import image3 from "../../Imagenes/add.png";
import image4 from "../../Imagenes/heart.png";
import image5 from "../../Imagenes/email.png";
const NavB = () => {
    return (
        <Div10>
            <Img6 src={image1} alt="" />
            <Link  to='/search'> <Img6 src={image2} alt="" /></Link>
            <Img6 src={image3} alt="" />
            <Img6 src={image4} alt="" />
            <Img6 src={image5} alt="" />
        </Div10>
    );
};

export default NavB;