import React from 'react';
import Skill from './Skill';

import { FiMoon } from 'react-icons/fi';

const Skills = ({ props }) => {
	return (
		<section className="skills" id="skills">
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

				<div className="skills__left">
					<ul className="skills__list">
						<Skill number="10" color="blue" title="Desenvolvimento" />
						<Skill number="20" color="pink" title="Cachorro" />
						<Skill number="30" color="purple" title="Cachorro" />
						<Skill number="50" color="blue" title="Cachorro" />
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Skills;
