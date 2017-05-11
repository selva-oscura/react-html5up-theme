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
		case "radio":
			layout+=props.formElement.layout || "";
			return (
				<div className={layout}>
					<input type={props.formElement.type} id={props.formElement.id} name={props.formElement.name} />
					<label htmlFor={props.formElement.id}>{props.formElement.label}</label>
				</div>
			)
		case "checkbox":
		case "color":
		case "date":
		case "datetime-local":
		case "email":
		case "email":
		case "month":
		case "number":
		case "range":
		case "search":
		case "tel":
		case "time":
		case "url":
		case "week":
			return (
				<div className={layout}>
					<p>time to get around to making the {props.formElement.type} element</p>
				</div>
			)
		default: 
			console.log("ERROR ON FORM ELEMENT", props);
			return null;
	}
}

export default FormElement;