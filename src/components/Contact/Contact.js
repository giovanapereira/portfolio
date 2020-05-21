import React from 'react';
import { FiMoon, FiSmartphone, FiMail, FiMapPin } from 'react-icons/fi';
import Form from './Form';

const Contact = () => {
	return (
		<section className="contact" id="contact">
			<div className="container">
				<h2 className="contact__title">
					Contato <FiMoon />
				</h2>

				<p>
					<strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. Nulla nec commodo urna.
					Cras convallis vitae justo a volutpat.{' '}
					<strong>Vivamus aliquam volutpat ipsum, sit amet pulvinar felis sollicitudin ut</strong>.
				</p>

				<ul className="contact__list">
					<li>
						<FiSmartphone /> <a href="tel:+5519971449941">+55 (19) 97144-9941</a>
					</li>
					<li>
						<FiMail />{' '}
						<a href="mailto:giovana.giovana.pereira@gmail.com">giovana.giovana.pereira@gmail.com</a>
					</li>
					<li>
						<FiMapPin /> São Paulo, SP
					</li>
				</ul>

				<Form />
			</div>
		</section>
	);
};

export default Contact;
