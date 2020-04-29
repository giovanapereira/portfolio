import React, { useState } from 'react';

//Hamburguer Menu
import Open from './Menu/Open';
import Menu from './Menu/Menu';

import logo from '../img/logo.png';

function Header() {
	// Open Hamburguer Menu
	const [ open, setOpen ] = useState(false);

	return (
		<header className="header container">
			<div className="header__item">
				<img src={logo} className="header__logo" alt="logo" />
			</div>

			<div className="header__item">
				<Open open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</div>
		</header>
	);
}

export default Header;
