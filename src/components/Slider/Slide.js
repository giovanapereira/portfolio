import React from 'react';

const Slide = (props) => {
	// Get the content of slide by parent
	return <div className="slider__slide" style={{ backgroundImage: `url(${props.content})` }} />;
};

export default Slide;
