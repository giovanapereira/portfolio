import React, { useState, setState } from 'react';
import { FiSend } from 'react-icons/fi';

const Form = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Meu nome é ${name}, quero conversar com você! Me retorne no e-mail ${email}. ${message}`);
	};

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');

	return (
		<form id="form" className="contact__form" onSubmit={handleSubmit.bind(this)} method="POST">
			<div className="contact__form--group">
				<label htmlFor="name">Nome</label>
				<input
					type="text"
					name="name"
					id="name"
					className="contact__form--control"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</div>

			<div className="contact__form--group">
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					name="email"
					id="email"
					className="contact__form--control"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div className="contact__form--group">
				<label htmlFor="message">Mensagem</label>
				<textarea
					name="message"
					id="message"
					className="contact__form--control"
					rows="5"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>
			</div>

			<button type="submit" className="contact__form--btn">
				Enviar <FiSend />
			</button>
		</form>
	);
};

export default Form;
