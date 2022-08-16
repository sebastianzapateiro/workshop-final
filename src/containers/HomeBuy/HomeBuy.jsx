import React from 'react';
import DataUser from '../../modules/home/DataUser';
import Recently from '../../modules/home/Recently';
import Tips from '../../modules/home/Tips';
import NavB from '../../modules/home/NavB';

 



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