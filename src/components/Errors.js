import React from 'react';
import Message from './Message';

const Errors = (props) => {
	return (
		<div className="inner" style={{"color": "red"}}>
			<p>
				{props.errors.map((error, i) => (<Message key={i} message={error} />))}
			</p>
		</div>

	);
}

export default Errors;