import React from 'react';

const Item = (props) => {
	console.log('props from Item',props);
	const iconClass ="icon style2 major " + props.image;
	return(
		<section>
			<span className={iconClass}></span>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</section>
	)

}

export default Item;