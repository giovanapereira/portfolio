import React from 'react';

const Skill = (props) => {
	return (
		<li className={`skills__list--item`}>
			<div className={`skills__list--item`}>
				<div className={`skills__list--number ${props.color}`} style={{ height: `${props.number}%` }}>
					<strong>{props.number}%</strong>
				</div>
			</div>

			<small>{props.title}</small>
		</li>
	);
};

export default Skill;
