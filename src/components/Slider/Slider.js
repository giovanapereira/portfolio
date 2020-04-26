import React, { useState, useEffect, useRef } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

// Function for Slider, this component wrap all other components
const getWidth = () => window.innerWidth;

const Slider = (props) => {
	// const { slides } = props;

	// const firstSlide = slides[0];
	// const secondSlide = slides[1];
	// const lastSlide = slides[slides.length - 1];

	const [ state, setState ] = useState({
		activeSlide: 0,
		translate: 0,
		transition: 0.45
		// _slides: [ lastSlide, firstSlide, secondSlide ]
	});

	// const { activeSlide, translate, _slides, transition } = state;
	const { activeSlide, translate, transition } = state;

	const autoPlayRef = useRef();
	// const transitionRef = useRef();
	// const resizeRef = useRef();

	useEffect(() => {
		autoPlayRef.current = nextSlide;
		// transitionRef.current = smoothTransition;
		// resizeRef.current = handleResize;
	});

	useEffect(() => {
		const play = () => {
			autoPlayRef.current();
		};

		// const smooth = (e) => {
		// 	if (e.target.className.includes('SliderContent')) {
		// 		transitionRef.current();
		// 	}
		// };

		// const resize = () => {
		// 	resizeRef.current();
		// };

		const interval = setInterval(play, props.autoPlay * 1000);
		// const transitionEnd = window.addEventListener('transitionend', smooth);
		// const onResize = window.addEventListener('resize', resize);

		return () => {
			clearInterval(interval);
			// window.removeEventListener('transitionend', transitionEnd);
			// window.removeEventListener('resize', onResize);
		};
	}, []);

	// useEffect(
	// 	() => {
	// 		if (transition === 0) setState({ ...state, transition: 0.45 });
	// 	},
	// 	[ transition ]
	// );

	// const handleResize = () => {
	// 	setState({ ...state, translate: getWidth(), transition: 0 });
	// };

	// const smoothTransition = () => {
	// 	let _slides = [];

	// 	// We're at the last slide.
	// 	if (activeSlide === slides.length - 1) _slides = [ slides[slides.length - 2], lastSlide, firstSlide ];
	// 	else if (activeSlide === 0)
	// 		// We're back at the first slide. Just reset to how it was on initial render
	// 		_slides = [ lastSlide, firstSlide, secondSlide ];
	// 	else
	// 		// Create an array of the previous last slide, and the next two slides that follow it.
	// 		_slides = slides.slice(activeSlide - 1, activeSlide + 2);

	// 	setState({
	// 		...state,
	// 		_slides,
	// 		transition: 0,
	// 		translate: getWidth()
	// 	});
	// };

	const nextSlide = () =>
		setState({
			...state,
			translate: translate + getWidth(),
			activeSlide: activeSlide === props.slides.length - 1 ? 0 : activeSlide + 1
		});

	const prevSlide = () =>
		setState({
			...state,
			translate: translate - getWidth(),
			activeSlide: activeSlide === 0 ? props.slides.length - 1 : activeSlide - 1
		});

	return (
		<div className="slider">
			<SliderContent translate={translate} transition={transition} width={getWidth() * props.slides.length}>
				{props.slides.map((slide, i) => <Slide width={getWidth()} key={slide + i} content={slide} />)}
			</SliderContent>

			<Arrow direction="left" handleClick={prevSlide} />
			<Arrow direction="right" handleClick={nextSlide} />

			<Dots slides={props.slides} activeSlide={activeSlide} />
		</div>
	);
};

export default Slider;
