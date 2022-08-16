import React from 'react';

import '../styles/sass/ChooseGener.scss'

import { IoMdMale, IoMdFemale } from "react-icons/io";

const ChoiceGener = () => {
    return (
        <div className='chose-gener' >
            <input type="radio" id="contactChoice1"
            name="contact" value="email" defaultChecked={true} />
            <label for="contactChoice1">
                <IoMdMale size={112}/>
            </label>

            <input type="radio" id="contactChoice2"
            name="contact" value="phone"/>
            <label for="contactChoice2">
                <IoMdFemale size={112}/>
            </label>
        </div>
    );
};

export default ChoiceGener;