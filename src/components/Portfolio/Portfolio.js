import React from 'react';
import Item from './Item';

import { FiMoon } from 'react-icons/fi';

const Portfolio = ({ props }) => {
	return (
		<div className="portfolio" id="portfolio">
			<div className="container">
				<h2 className="portfolio__title">
					Portfólio <FiMoon />
				</h2>

				<div className="portfolio__left">
					<ul className="portfolio__list">
						<Item
							image="https://via.placeholder.com/500x500/48b6f0/FFF"
							color="pink"
							title="Desenvolvimento"
						/>
						<Item image="https://via.placeholder.com/500x500/e94fad/FFF" color="purple" title="Cachorro" />
						<Item image="https://via.placeholder.com/500x500/6f49ca/FFF" color="blue" title="Cachorro" />
						<Item image="https://via.placeholder.com/500x500/48b6f0/FFF" color="pink" title="Cachorro" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
