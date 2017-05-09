import React from 'react';

const Splash = () => {
	return (
		<section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
			<div className="content">
				<h1>Story</h1>
				<p className="major">A (modular, highly tweakable) responsive one-page template designed by <a href="https://html5up.net">HTML5 UP</a> and released for free under the <a href="https://html5up.net/license">Creative Commons</a>.</p>
				<ul className="actions vertical">
					<li><a href="#first" className="button big wide smooth-scroll-middle">Get Started</a></li>
				</ul>
			</div>
			<div className="image">
				<img src="images/banner.jpg" alt="" />
			</div>
		</section>
	)
}

export default Splash;