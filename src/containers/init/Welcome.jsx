import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import man1 from '../../assets/man_1.svg'
import man2 from '../../assets/man_2.svg'
import man3 from '../../assets/man_3.svg'

import '../../styles/sass/Welcome.scss'


const Welcome = () => {

    const [ point, setPoint ] = useState(0)

    useEffect( () => { document.title  = "Welcome" }, [] )

    const sing_in = useNavigate()

    const upPoint = () =>{
        setPoint( point + 1 )
        if(  point + 1 < document.getElementById( "welcome-img" ).childNodes.length ){
            clearClassAll()
            whatActive( point + 1 )
        }else{
            sessionStorage.seeWelcome = true
            sing_in('/init/sing-in')
            window.location.reload(false)
        }
    }
    
    const toPoint = ( event ) =>{
        if(  point < document.getElementById( "welcome-img" ).childNodes.length ){
            clearClassAll()
            setPoint( parseInt( event.target.value ) )
            whatActive( parseInt( event.target.value ) )
        }
        setPoint( parseInt( event.target.value ) )
    }

    const clearClassAll = () => {
        cleanClass("welcome-img")
        cleanClass("welcome-points")
        cleanClass("welcome-text")
    }

    const cleanClass = ( id ) =>{
        document.getElementById( id ).childNodes
            .forEach( element =>{ element.className = "" } )
    }

    const whatActive = ( id ) =>{
        document.getElementById( "welcome-points" )
            .childNodes[ id ].className = "active"
        document.getElementById( "welcome-img" )
            .childNodes[ id ].className = "active"
        document.getElementById( "welcome-text" )
            .childNodes[ id ].className = 'active'
    }

    return (
        <div className='welcome'>
            <div className="welcome-img" id='welcome-img'>
                <img src={ man1 } alt="" className='active'/>
                <img src={ man2 } alt="" />
                <img src={ man3 } alt="" />
            </div>
            <div className="welcome-footer">
                <div className="welcome-text" id='welcome-text'>
                    <div className="active">
                        <h1>Choose</h1>
                        <h2>Choose products available add to favorites and then buy</h2>
                    </div>
                    <div>
                        <h1>Sell</h1>
                        <h2>List your items for sale and see how fast they get bought</h2>
                    </div>
                    <div>
                        <h1>Buy</h1>
                        <h2>See and choose products suitable products or products that are nearby</h2>
                    </div>
                </div>
                <div className="welcome-points" id='welcome-points'>
                    <button className='active' value={0} onClick={ toPoint }></button>
                    <button value={1} onClick={ toPoint }></button>
                    <button value={2} onClick={ toPoint }></button>
                </div>
                <button className='next' type="button" 
                onClick={ upPoint } >Next</button>
            </div>
        </div>
    );
};

export default Welcome;