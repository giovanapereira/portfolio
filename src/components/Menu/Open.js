import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Open = ({ open, setOpen }) => {
	const active = open ? 'active' : '';

	return (
		<div className={`header__menu--click ${active}`} open={open} onClick={() => setOpen(!open)}>
			{open ? <FiX /> : <FiMenu />}
		</div>
	);
};

export default Open;
