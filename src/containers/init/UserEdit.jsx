

import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/sass/UserEdit.scss'
function UserEdit() {

  const { displayName, photoURL, email } = useSelector(state => state.valoresUsuario)

  return (
    <div className='container'>
      <img className='img-profile' src={photoURL} alt="" />


      <form className='form-data'>
        <input type="text" id='nombre' value={displayName} disabled />
        <input type="text" id='email' value={email} disabled />
        <input type="text" id='telefono' />
        <input type="text" id='ubicacion' />
        <input type="text" id='payment' />
        <button type='submit'>Actualizar</button>
      </form>



    </div>
  )
}

export default UserEdit