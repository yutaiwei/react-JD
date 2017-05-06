import './lib/common.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search/search';
import Header from './components/header/header';
import OtherApp from './components/otherapp/otherapp';
import Spike from './components/spike/spike';
import More from './components/more/more';
import Like from './components/like/like';

ReactDOM.render(
	<div>
		<Search />
		<Header source="http://localhost:3000/data/swiper" />
		<OtherApp source="http://localhost:3000/data/otherapp" />
		<Spike source="http://localhost:3000/data/spike" />
	<More source="http://localhost:3000/data/more" />
	 	<Like source="http://localhost:3000/data/like" />
	</div>,
	document.querySelector("#myApp")
);
