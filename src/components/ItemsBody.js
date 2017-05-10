import React from 'react';
import Item from './Item';

const ItemsBody = (props) => {
	return (
		<div className="inner">
			<div className="items style1 medium onscroll-fade-in">
				{props.items.map((item, i) => (<Item key={i} title={item.title} text={item.text} image={item.image} />))}
			</div>
		</div>
	)
}

export default ItemsBody;