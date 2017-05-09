import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryBody = (props) => {
	return (
		<div className="gallery style2 medium lightbox onscroll-fade-in">
			{props.galleryItems.map((galleryItem, i) => (<GalleryItem key={i} galleryItem={galleryItem}/>))}
		</div>
	)
}

export default GalleryBody;