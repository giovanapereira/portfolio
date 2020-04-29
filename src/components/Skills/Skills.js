import React from 'react';
import { FiMoon } from 'react-icons/fi';

const Skills = ({ props }) => {
	return (
		<div className="skills" id="skills">
			<div className="container">
				<div className="skills__right">
					<h2 className="skills__title">
						Minhas Skill's <FiMoon />
					</h2>

					<p>
						<strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Nulla nec commodo
						urna. Cras convallis vitae justo a volutpat.{' '}
						<strong>Vivamus aliquam volutpat ipsum, sit amet pulvinar felis sollicitudin ut</strong>.
					</p>
				</div>

				<div className="skills__left">Graphics</div>
			</div>
		</div>
	);
};

export default Skills;