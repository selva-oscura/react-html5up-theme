import React from 'react';

const FormArea = (props) => {
	return (
		<section className="wrapper style1 align-center">
			<div className="inner medium">
				<h2>Get in touch</h2>
				<form method="post" action="#">
					<div className="field half first">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" value="" />
					</div>
					<div className="field half">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" value="" />
					</div>
					<div className="field">
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" rows="6"></textarea>
					</div>
					<ul className="actions">
						<li><input type="submit" name="submit" id="submit" value="Send Message" /></li>
					</ul>
				</form>

			</div>
		</section>
	)
}

export default FormArea;