import React from 'react';
import FormElement from './FormElement';

const FormArea = (props) => {
	console.log("props from FormArea", props)
	return (
		<section className="wrapper style1 align-center">
			<div className="inner medium">
				<h2>{props.callToAction}</h2>
				<form method="post" action="#">
					{props.form.map((formElement, i) => (<FormElement key={i} formElement={formElement} />))}
				</form>

			</div>
		</section>
	)
}

export default FormArea;
