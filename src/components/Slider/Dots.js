import React from 'react';

const Dot = ({ active }) => {
	return <span className={`slider__dot ${active ? 'active' : ''}`} />;
};

const Dots = ({ slides, activeSlide }) => {
	return (
		<div className="slider__dots">
			{slides.map((slide, i) => <Dot key={slide + i} active={activeSlide === i} />)}
		</div>
	);
};

export default Dots;
