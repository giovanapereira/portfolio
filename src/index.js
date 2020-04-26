import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import 'normalize.css';
import './scss/Common.scss';

// Components of the site
import Header from './components/Header';
import Slider from './components/Slider/Slider';
import About from './components/About/About';

import images from './utils/slider';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Slider slides={images} autoPlay={7} />
		<About />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
