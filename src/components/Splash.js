import React from 'react';

const Splash = (props) => {
	return (
		<section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
			<div className="content">
				<h1>{props.title}</h1>
				<p className="major">{props.text}</p>
				<ul className="actions vertical">
					<li><a href="#first" className="button big wide smooth-scroll-middle">{props.callToAction}</a></li>
				</ul>
			</div>
			<div className="image">
				<img src={`images/${props.image}.jpg`} alt="" />
			</div>
		</section>
	)
}

export default Splash;