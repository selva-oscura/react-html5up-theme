import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Footer, Gallery, Items, Splash, Spotlight } from './components';

const galleryFiller = [];
for(let i = 1; i<=12; i++){
	galleryFiller.push({
		title: `Title ${i}`,
		text: `More blah, blah, blah filler text for gallery item ${i}`,
		callToAction: `Click Me ${i}`,
		image: i
	});
}

class App extends Component {
	render(){
		return(
			<div id="wrapper" className="divided">

				<Splash 
					title="Splash"
					text="A bunch of text here as the blah, blah, blah for the site. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum."
					callToAction="Do Something"
					image="banner"
				/>
		
				<Spotlight
					orient="right"
					title="Header 1"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
					callToAction="Learn More"
					image="spotlight01"
				/>

				<Spotlight
					orient="left"
					title="Header 2"
					text="More text here. Blah, blah, blah....."
					callToAction="Details"
					image="spotlight02"
				/>
				<Spotlight
					orient="right"
					title="Header 3"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
					callToAction="Details"
					image="spotlight03"
				/>
				<Spotlight
					orient="left"
					title="Header 4"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."
					callToAction="Details"
					image="spotlight01"
				/>


				<Gallery 
					sectionHeadTitle="Gallery"
					sectionHeadText="Some text for the head of that Gallery.  Go, Gallery, Go!"
					galleryItems={galleryFiller}
				/>

				<Items />
				
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
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));