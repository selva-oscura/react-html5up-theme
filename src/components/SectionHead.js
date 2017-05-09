import React from 'react';

const SectionHead = (props) => {
	return (
		<div className="inner">
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</div>
	)
}

export default SectionHead;