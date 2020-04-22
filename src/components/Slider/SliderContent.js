import React from 'react';

const SliderContent = (props) => {
	// Get values calculated by parent to transform childrens sliders
	let transformValue = props.translate;
	let transitionValue = props.transition;
	let widthValue = props.width;

	// Insert the style inline on div item
	const style = {
		transform: `translateX(-${transformValue}px)`,
		transition: `transform ease-out ${transitionValue}s`,
		width: `${widthValue}px`
	};

	return <div className="slider__component" style={style} />;
};

export default SliderContent;
