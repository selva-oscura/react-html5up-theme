import React from 'react';
import SectionHead from './SectionHead';
import ItemsBody from './ItemsBody';

const Items = (props) => {
	return(
		<section className="wrapper style1 align-center">

			<SectionHead 
				title={props.sectionHeadTitle}
				text={props.sectionHeadText}
			/>
			
			<ItemsBody
				items={props.items}
			/>

		</section>
	)
}

export default Items;