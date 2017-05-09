import React from 'react';
import SectionHead from './SectionHead';
import GalleryBody from './GalleryBody';

const Gallery = (props) => {
	return(
		<section className="wrapper style1 align-center">
			
			<SectionHead 
				title={props.sectionHeadTitle}
				text={props.sectionHeadText}
			/>
			
			<GalleryBody 
				galleryItems={props.galleryItems}
			/>

		</section>
	)
}

export default Gallery;