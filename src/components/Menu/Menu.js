import React from 'react';

const Menu = ({ open, setOpen }) => {
	const active = open ? 'active' : '';

	return (
		<ul className={`header__menu ${active}`} open={open}>
			<li>
				<a className="header__link" href="#home" onClick={() => setOpen(!open)}>
					home
				</a>
			</li>
			<li>
				<a className="header__link" href="#about" onClick={() => setOpen(!open)}>
					sobre
				</a>
			</li>
			<li>
				<a className="header__link" href="#skills" onClick={() => setOpen(!open)}>
					skills
				</a>
			</li>
			<li>
				<a className="header__link" href="#portfolio" onClick={() => setOpen(!open)}>
					portfolio
				</a>
			</li>
			<li>
				<a className="header__link" href="#contact" onClick={() => setOpen(!open)}>
					contato
				</a>
			</li>
		</ul>
	);
};

export default Menu;
