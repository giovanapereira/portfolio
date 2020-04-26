import React from 'react';

function List(props) {
	return (
		<li className="about__list--item">
			<img src={`${props.icon}`} />

			<h5>{props.title}</h5>

			<p>{props.description}</p>
		</li>
	);
}

export default List;
