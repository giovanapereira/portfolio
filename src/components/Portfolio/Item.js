import React from 'react';

const Item = (props) => {
	return (
		<li className={`portfolio__list--item ${props.color}`}>
			<div className={`portfolio__list--image`} style={{ backgroundImage: `url(${props.image})` }}>
				{props.title}
			</div>
		</li>
	);
};

export default Item;
