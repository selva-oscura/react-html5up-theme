import React from 'react';
import FormElement from './FormElement';
import Errors from './Errors';
import Messages from './Messages';

const FormArea = (props) => {
	return (
		<section className="wrapper style1 align-center">
			<div className="inner medium">
				<h2>{props.callToAction}</h2>
				<form>
					{props.form.map((formElement, i) => (
						<FormElement 
							key={i}
							formState={props.formState}
							updateFormState={props.updateFormState}
							submitMailForm={props.submitMailForm}
							formElement={formElement}
						/>
					))}
				</form>
				{props.formState.errors.length>0 && <Errors errors={props.formState.errors} />}
				{props.formState.responses.length>0 && <Messages messages={props.formState.responses} />}
			</div>
		</section>
	)
}

export default FormArea;
