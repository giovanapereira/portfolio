import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';

const Tab = (props) => {
	const { label, color, bg, isActive, onClick } = props;

	const tabClass = `tabs__item ${color}`;
	const linkClass = isActive ? 'active' : '';

	return (
		<li className={tabClass} style={{ backgroundImage: `url(${bg})` }}>
			<a className={`tabs__item--link ${linkClass}`} onClick={onClick}>
				{label} <FiArrowRightCircle />
			</a>
		</li>
	);
};

export default Tab;
