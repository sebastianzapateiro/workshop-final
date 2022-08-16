import React from 'react';
import DataUser from '../../modules/home/DataUser';
import Recently from '../../modules/home/Recently';
import Tips from '../../modules/home/Tips';




const HomeBuy = () => {
    return (
        <div>
        <DataUser/>
         <Tips/>
         <Recently/>

        </div>
    );
};

export default HomeBuy;