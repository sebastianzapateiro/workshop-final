

import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { enviarDatos } from '../../helpers/CRUD'
import '../../styles/sass/UserEdit.scss'
function UserEdit() {

  const { uid,displayName, photoURL, email } = useSelector(state => state.valoresUsuario)

  const telefono = useRef();
  const ubicacion = useRef();


  const enviarDatos = (e) =>{
    e.preventDefault();
    const datos = {
      telefono_: telefono.current.value,
      ubicacion_: ubicacion.current.value,
    }
    enviarDatos(datos,uid);
    
  }

  return (
    <div className='container'>
      <img className='img-profile' src={photoURL} alt="None" />


      <form className='form-data' onSubmit={enviarDatos}>
        <input  type="text" id='nombre' value={displayName} disabled />
        <input type="text" id='email' value={email} disabled />
        <input ref={telefono} type="text" id='telefono' placeholder='Numero de telefono' />
        <input ref={ubicacion} type="text" id='ubicacion' placeholder='Ubicacion' />
        <button type='submit'>Actualizar</button>
      </form>



    </div>
  )
}

export default UserEdit