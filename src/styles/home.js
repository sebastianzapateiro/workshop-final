import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Div = styled.div`
    font-family: 'Raleway', sans-serif;
`


export const Section1 = styled.section`
    
    width:100%;
    height: 19%;
    display: flex;
    margin-top:10%;
    
 
`;
export const Div1 = styled.div`
    width:30%;
    height: 12%;
    display: flex;
    margin-left: 6%;
    
 
`;
export const H3 = styled.h3`
    
width: 94px;
height: 14.63px;
left: 64px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.3px;
/* White */
color: #FFFFFF;
 
`;
export const P1 = styled.p`
    
width: 94px;
height: 14.63px;
left: 64px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.3px;
/* White */
color: #FFFFFF;
 
`;

export const Img1 = styled.img`
width: 32px;
height: 32px;
left: 16px;
top: 61px;
border-radius: 15px
 
`;
export const Div2 = styled.div`
margin-left: 10%
 
`;
export const Div3 = styled.div`
margin-left:55%
 
`;

export const Section2 = styled.section`
    
width: 323px;
height: 122px;
margin: 0 auto;
margin-top: 12%;
display: flex;
justify-content: center;
/* Additional shade of the main color */
background: #2E3562;
border-radius: 11px;
    
`;
export const P = styled.p`
position: absolute;
width: 191px;
height: 37px;
left: 32px;
top: 165px;
font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.3px;
/* White */
color: #FFFFFF;
`;
export const H52 = styled.h5`
position: absolute;
width: 76px;
height: 21px;
left: 32px;
top: 128px;
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
text-align: center;
letter-spacing: -0.3px;
/* White */
color: #FFFFFF;
`;

export const Div5 = styled.div`
margin-left:60%;
`;
export const Div4 = styled.div`
`;
export const Img3 = styled.img`
margin-top:16%;
width: 55px;
height: 99px;
`;
export const Section3 = styled.section`
width: 87%;
height: 32px;
margin: 5% auto;
border-radius: 11px;
display:flex;
background: #2E3562;
`;
export const Div6 = styled.div`
width: 50%;
height: 100%;
display:flex;
/* Optional second color */
background: #2BE7E8;
border-radius: 62px;
`;
export const H4 = styled.h4`
margin: auto auto;
`
export const Div7 = styled.div`
width: 50%;
height: 100%;
display:flex;
/* Optional second color */
border-radius: 62px;
`;

export const FilterContain = styled.section`
    width: 95%;
    height: 5%;
    display: grid;
    gap: 4px;
    margin: auto;
    grid-template-columns: repeat( 6, 1fr );
    justify-items: center;
    .active{
        background: #2BE7E8
    }
`;
//Option To Filter
export const OptToFilter = styled.button`
    min-width: 54px;
    height: 16px;
    padding: 4px 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* Additional shade of the main color */
    border: none;
    font-size: 8px;
    border-radius: 37px;
    background: ${props => props.primary 
    ?"#2BE7E8" : "#2E3562"};
    
`;
export const H6 = styled.h6`
    text-align:center;
`;

export const Div9 = styled.div`
width: 91.79%;
height: 30.98vh;
margin: 5% auto;
/* Additional shade of the main color */
background: #2E3562;
border-radius: 11px;
`;

export const Section5 = styled.section`
display:block;
margin: 15% auto;
`;

export const Img10 = styled.img`
position:relative;
width: 100%;
height: 61%;
index:-20;
background: white;
border-radius: 11px 11px 0px 0px;
`;
export const H2 =  styled.h2`
width: 203px;
height: 21px;
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
letter-spacing: -0.3px;
/* White */
color: #FFFFFF;
`;
export const P3 =  styled.p`
width: 184px;
height: 30px;
margin-top:1.3%;
font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 9px;
line-height: 11px;
letter-spacing: -0.3px;
/* White */
color: #FFFFFF;
`;
export const Subsec5 =  styled.section`
width: 326px;
height: 59px;
margin: 0 5%;
`;
export const ImgDificulty =  styled.img`
position:absolute;
index:20;
left:31px;
margin-top:10px
`;
export const Subsec6 = styled.section`
margin-right:4%;
`;
export const Subdiv9 = styled.div`
display:flex;
`;
export const H66 = styled.h6`
width: 51px;
height: 16px;
font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: -0.3px;
/* White */
color: #FFFFFF;
`;

export const H55 = styled.h5`
width: 28px;
height: 12px;
margin-left:20px;
margin-top:20px;
font-family: 'Raleway';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
/* identical to box height */
letter-spacing: -0.3px;
/* Optional second color */
color: #2BE7E8;
`;



/*Estilos para barra de navegación :D*/

export const TOptionNav = styled.p`
font-family: 'Raleway';
font-style: normal;
font-weight: 300;
font-size: 14px;
color: black;
`
export const ImgNav = styled.img`
width: 12px;
height: 12.15px;
`
export const DivNav = styled.div`
display: flex;
flex-direction:row;
gap:10px;
align-items:cener;
padding-top:10px;
margin-left:6%;
`