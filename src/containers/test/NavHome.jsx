
import React, { Fragment, useRef } from 'react'
import "../../styles/sass/LeftNav.scss"
import {Div1,Section1,H3, P1,Img1,Div2,Div3,DivNav,ImgNav,TOptionNav} from '../../styles/home';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import img2 from '../../assets/Menu.svg'


function NavHome() {
  
    const elemento = useRef('');
    const {uid,displayName, photoURL} = useSelector(state => state.valoresUsuario)
    

    const closeNav = () =>{
        elemento.current.classList.toggle("width-size");

    }
    const openNav = () =>{
        console.log("Que si enras")
        elemento.current.classList.toggle("width-size");
    }
  
    return (
    
        <Fragment>
        <div id="mySidenav" ref={elemento} className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <Div1>
                    <Img1 src= {photoURL} alt="img"  />
                    <Div2>
                        <H3>"Hi!"</H3>
                        <P1>{displayName}</P1>
                    </Div2>
                    <Div3>
               <Link to={'/init/user/'+uid}> <img src={img2}  alt="im"  /></Link>
            </Div3>  
                </Div1>
                <DivNav> <TOptionNav>Active ads</TOptionNav>  </DivNav>
                <DivNav> <TOptionNav>Inactive ads</TOptionNav>  </DivNav>
                <DivNav> <TOptionNav>Payment</TOptionNav>  </DivNav>
                <DivNav> <TOptionNav>Terms of use</TOptionNav>  </DivNav>
                <DivNav> <TOptionNav>Security policy</TOptionNav>  </DivNav>
                <DivNav> <TOptionNav>About Us</TOptionNav>  </DivNav>
            
        </div>

        <Section1  onClick={openNav}>
                <Div1>
                    <Img1 src= {photoURL} alt="img"  />
                    <Div2>
                        <H3>"Hi!"</H3>
                        <P1>{displayName}</P1>
                    </Div2>
                   
                </Div1>
              
        </Section1>
    </Fragment>


  )
}

export default NavHome