import React from 'react';

const FormElement = (props) => {
	let layout="field ";
	switch(props.formElement.type){
		case "text":
		case "number":
		case "password":
		case "email":
			layout+=props.formElement.layout || "";
			return (
				<div className={layout}>
					<label htmlFor={props.formElement.id}>{props.formElement.label}</label>
					<input type={props.formElement.type} name={props.formElement.id} id={props.formElement.id} value="" />
				</div>
			)
		case "textarea":
			layout+=props.formElement.layout || "";
			let rows = props.formElement.rows || 6;
			return (
				<div className={layout}>
					<label htmlFor={props.formElement.id}>{props.formElement.label}</label>
					<textarea name={props.formElement.id} id={props.formElement.id} rows={rows}></textarea>
				</div>
			)
		case "submit":
			return (
				<ul className="actions">
					<li><input type="submit" name={props.formElement.id} id={props.formElement.id} value={props.formElement.text} /></li>
				</ul>
			)
		default: 
			console.log("ERROR ON FORM ELEMENT", props);
			return null;
	}
}

export default FormElement;