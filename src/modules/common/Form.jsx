import '../../styles/sass/Form.scss'

import React from 'react';
import { useNavigate } from 'react-router-dom';

import RE from '../../tools/RE';

import PropTypes from 'prop-types'

const Form = ( props ) => {

    const { txt_main, txt_secondary, btn_text, inputs, go_page, txt_footer, handleSubmit } = props

    const submit = (e) =>{
		e.preventDefault()
		let obj = {}
		const inputs = e.target.querySelectorAll("input")

		let isOk = true

		inputs.forEach(element => {
			if( element.type === "tel" ){
				if( RE.checkPhone(element.value) ) {
					obj[element.name] = element.value
				}
				else obj[element.name] = null
			}
			else if( element.type === 'password') {
				if(RE.checkPassword(element.value)) {
					obj[element.name] = element.value
				}
				else obj[element.name] = null
			}
			else if( element.type === 'text') {
				if(RE.checkName(element.value)) {
					obj[element.name] = element.value
				}
				else obj[element.name] = null
			}
			else if( element.type === 'email') {
				if(RE.checkEmail(element.value)) {
					obj[element.name] = element.value
				}
				else obj[element.name] = null
			}

			if( obj[element.name] == null ) return isOk = false
		});
		

		if( isOk ) {
            if( false ){
                postUser( obj.user, obj.email, obj.tel, obj.pass)
            }
        }

	}

	const stateColorInput = ( e ) =>{
		//console.log( e.target.type )
		if( e.target.type === "tel" ) allIsOk( e.target, RE.checkPhone)
		if( e.target.type === 'password') allIsOk( e.target, RE.checkPassword)
		if( e.target.type === 'text') allIsOk( e.target, RE.checkName )
		if( e.target.type === 'email') allIsOk( e.target, RE.checkEmail )
	}

	/**
	 * Cambia el color a nuestro input segun si es valio o no
	 * @param {*} node 
	 * @param {Function} callback 
	 * @returns {Boolean}
	 */
	const allIsOk = ( node, callback ) => {
		//console.log( callback( node.value ) )
		if( node.value.length === 0 ) node.className = ""
		else if ( callback( node.value ) ) node.className = "complete"
		else { node.className = "incomplete" }
		return callback( node.value )
	}

	const navigate = useNavigate()

    return (
        <div className="form-init">
			<div className="form-init-header-text">
				<h1>{ txt_main }</h1>
			</div>

			<form action="" 
				className="form-init-inputs"
				onSubmit={ handleSubmit } >
				
				<div className="inputs">
					{
						inputs.map( obj => { 
							return (
								<input type={obj.t} name={obj.n} 
								placeholder={obj.ph} onChange={ stateColorInput } required />
							)
						})
					}
				</div>

				<div className="footer">
					<button type="submit">{ btn_text }</button>
					<h3> { txt_footer.h2 } </h3>
				</div>
				
			</form>
		</div>
    );
};

Form.protoType = {
	inputs: PropTypes.arrayOf( PropTypes.object ).isRequired,
	/**  
	 * @param {array} inputs array this contain objects whit structure { t, n, ph }
	 * type = t
	 * name = n
	 * placeholder  = ph 
	*/
	btn_text: PropTypes.string.isRequired,
	txt_main: PropTypes.string,
	txt_secondary: PropTypes.string,
	go_page: PropTypes.string,
	txt_footer: PropTypes.string,
}

Form.defaultProps = {
	txt_main: '',
	txt_secondary: '',
	go_page: '',
	txt_footer: { a:'', h2:'' },
}


export default Form;