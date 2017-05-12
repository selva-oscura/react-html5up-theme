import React, { Component } from 'react';

const Footer = () => {
	return (
		<footer className="wrapper style1 align-center">
			<div className="inner">
				<ul className="icons">
					<li><a href="#" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
					<li><a href="#" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
					<li><a href="#" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
					<li><a href="#" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
					<li><a href="#" className="icon style2 fa-envelope"><span className="label">Email</span></a></li>
				</ul>
				<p>&copy; <span className="icon fa-long-arrow-left"> No... This is an open-source project, but it is using design by</span> <a href="https://html5up.net">HTML5 UP</a> (<a href="https://html5up.net/story">Story Theme</a>).</p>
			</div>
		</footer>
	)
}

export default Footer;