import React from 'react';
import DataUser from '../../modules/home/DataUser';
import NavB from '../../modules/home/NavB';
import Tips from '../../modules/home/Tips';

import Recently from '../../modules/home/Recently';



const HomeBuy = () => {
    return (
        <div>
        <DataUser/>
         <Tips/>
         <Recently/>
         <NavB/>
        </div>
    );
};

export default HomeBuy;