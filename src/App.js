import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Footer, Splash, Spotlight } from './components';

class App extends Component {
	render(){
		return(
			<div id="wrapper" className="divided">

				<Splash />
		
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

				<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
					<div className="content">
						<h2>Pharetra etiam nulla</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet.</p>
						<ul className="actions vertical">
							<li><a href="#" className="button">Learn More</a></li>
						</ul>
					</div>
					<div className="image">
						<img src="images/spotlight03.jpg" alt="" />
					</div>
				</section>

				<section className="wrapper style1 align-center">
					<div className="inner">
						<h2>Massa sed condimentum</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
					</div>

						<div className="gallery style2 medium lightbox onscroll-fade-in">
							<article>
								<a href="images/gallery/fulls/01.jpg" className="image">
									<img src="images/gallery/thumbs/01.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Ipsum Dolor</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/02.jpg" className="image">
									<img src="images/gallery/thumbs/02.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Feugiat Lorem</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/03.jpg" className="image">
									<img src="images/gallery/thumbs/03.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Magna Amet</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/04.jpg" className="image">
									<img src="images/gallery/thumbs/04.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Sed Tempus</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/05.jpg" className="image">
									<img src="images/gallery/thumbs/05.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Ultrices Magna</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/06.jpg" className="image">
									<img src="images/gallery/thumbs/06.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Sed Tempus</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/07.jpg" className="image">
									<img src="images/gallery/thumbs/07.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Ipsum Lorem</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/08.jpg" className="image">
									<img src="images/gallery/thumbs/08.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Magna Risus</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/09.jpg" className="image">
									<img src="images/gallery/thumbs/09.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Tempus Dolor</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/10.jpg" className="image">
									<img src="images/gallery/thumbs/10.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Sed Etiam</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/11.jpg" className="image">
									<img src="images/gallery/thumbs/11.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Magna Lorem</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
							<article>
								<a href="images/gallery/fulls/12.jpg" className="image">
									<img src="images/gallery/thumbs/12.jpg" alt="" />
								</a>
								<div className="caption">
									<h3>Ipsum Dolor</h3>
									<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
									<ul className="actions">
										<li><span className="button small">Details</span></li>
									</ul>
								</div>
							</article>
						</div>

				</section>

				<section className="wrapper style1 align-center">
					<div className="inner">
						<h2>Ipsum sed consequat</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
						<div className="items style1 medium onscroll-fade-in">
							<section>
								<span className="icon style2 major fa-diamond"></span>
								<h3>Lorem</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-save"></span>
								<h3>Ipsum</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-bar-chart"></span>
								<h3>Dolor</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-wifi"></span>
								<h3>Amet</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-cog"></span>
								<h3>Magna</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-paper-plane"></span>
								<h3>Tempus</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-desktop"></span>
								<h3>Aliquam</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-refresh"></span>
								<h3>Elit</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-hashtag"></span>
								<h3>Morbi</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-bolt"></span>
								<h3>Turpis</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-envelope"></span>
								<h3>Ultrices</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
							<section>
								<span className="icon style2 major fa-leaf"></span>
								<h3>Risus</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
							</section>
						</div>
					</div>
				</section>

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