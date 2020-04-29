import React from 'react';
import List from './List';
import { FiMoon } from 'react-icons/fi';

function About() {
	return (
		<section className="about container" id="about">
			<h2 className="about__title">
				Sobre Mim <FiMoon />
			</h2>

			<p>
				<strong>Lorem ipsum dolor</strong> sit amet, consectetur adipiscing elit. Nulla nec commodo urna. Cras
				convallis vitae justo a volutpat.{' '}
				<strong>Vivamus aliquam volutpat ipsum, sit amet pulvinar felis sollicitudin ut</strong>.
			</p>

			<ul className="about__list">
				<List
					icon="FiMoon"
					title="Cachorro"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec commodo urna."
				/>
				<List
					icon="FiMoon"
					title="Cachorro"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec commodo urna."
				/>
				<List
					icon="FiMoon"
					title="Cachorro"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec commodo urna."
				/>
				<List
					icon="FiMoon"
					title="Cachorro"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec commodo urna."
				/>
			</ul>
		</section>
	);
}

export default About;
