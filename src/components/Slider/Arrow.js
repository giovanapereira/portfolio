import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const Arrow = ({ direction, handleClick }) => {
	const directionArrow = `${direction === 'right' ? `right` : `left`}`;

	return (
		<div onClick={handleClick} className={`slider__arrow ${directionArrow}`}>
			{direction === 'right' ? <FiArrowRight /> : <FiArrowLeft />}
		</div>
	);
};

export default Arrow;
