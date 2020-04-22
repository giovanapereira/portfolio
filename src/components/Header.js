import React from 'react';
import logo from '../img/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__item">
        <img src={logo} className="header__logo" alt="logo" />
      </div>

      <div className="header__item">
        <ul className="header__list">
          <li><a className="header__link" href="#home">home</a></li>
          <li><a className="header__link" href="#sobre">sobre</a></li>
          <li><a className="header__link" href="#skills">skills</a></li>
          <li><a className="header__link" href="#portfolio">portfolio</a></li>
          <li><a className="header__link" href="#contato">contato</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
