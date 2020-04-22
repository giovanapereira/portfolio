import React, { useState } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';

// Function for Slider, this component wrap all other components
const Slider = (props) => {
	// Get the width of the element
	const getWidth = () => window.innerWidth;

	//Defining inital values for the translate and transition of sliders
	const [ state, setState ] = useState({
		translate: 0,
		transition: 0.45
	});

	const { translate, transition } = state;

	return (
		<div className="slider">
			<SliderContent translate={translate} transition={transition} width={getWidth() * props.slides.length}>
				{props.slides.map((slide, i) => <Slide key={slide + i} content={slide} />)}
			</SliderContent>
		</div>
	);
};

export default Slider;
