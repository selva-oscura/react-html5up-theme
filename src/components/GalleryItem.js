import React from 'react';

const GalleryItem = (props) => {
	let imageNumber;
	props.galleryItem.image<10 ? imageNumber = '0'+props.galleryItem.image : imageNumber = props.galleryItem.image;
	return (
		<article>
			<a href={`images/gallery/fulls/${imageNumber}.jpg`} className="image">
				<img src={`images/gallery/thumbs/${imageNumber}.jpg`} alt="" />
			</a>
			<div className="caption">
				<h3>{props.galleryItem.title}</h3>
				<p>{props.galleryItem.text}</p>
				<ul className="actions">
					<li><span className="button small">{props.galleryItem.callToAction}</span></li>
				</ul>
			</div>
		</article>
	)
}

export default GalleryItem;