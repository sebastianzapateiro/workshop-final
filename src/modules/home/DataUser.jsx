import React from 'react';
import {Div1,Section1,H3, P1,Img1,Div2,Div3} from '../../styles/home';

import image2 from "../../Imagenes/Notification.png";
const img1 = "https://www.adslzone.net/app/uploads-adslzone.net/2022/04/free-avatar-apertura.jpg"



const DataUser = () => {
    return (
        
             <Section1>
                    <Div1>
                        <Img1 src= {img1} alt="img"  />
                        <Div2>
                            <H3>"Hi!"</H3>
                            <P1>"name"</P1>
                        </Div2>
                       
                    </Div1>
                 <Div3>
                    <img src={image2} alt="im"  />
                </Div3>    
            </Section1>
        
    );
};

export default DataUser;