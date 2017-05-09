import React from 'react';

const Spotlight = (props) => {
	// console.log('props', props)
	const orient = props.orient || 'right';
	const containerClass = 'spotlight style1 orient-' + orient + ' content-align-left image-position-center onscroll-image-fade-in ';
	return (
		<section className={containerClass} id="first">
			<div className="content">
				<h2>{props.title}</h2>
				<p>{props.text}</p>
				<ul className="actions vertical">
					<li><a href="#" className="button">{props.callToAction}</a></li>
				</ul>
			</div>
			<div className="image">
				<img src={`images/${props.image}.jpg`} alt="" />
			</div>
		</section>
	)
}

export default Spotlight;