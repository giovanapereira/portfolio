import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'normalize.css';
import './scss/Common.scss';

// Components of the site
import Header from './components/Header';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import images from './utils/slider';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Slider slides={images} autoPlay={7} />
		<About />
		<Skills />
		<Portfolio />
		<Contact />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
