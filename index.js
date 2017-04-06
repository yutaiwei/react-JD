import './app/lib/common.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './app/components/search/search';
import Header from './app/components/header/header';
import Otherapp from './app/components/otherapp/otherapp';
import Spike from './app/components/spike/spike';
import More from './app/components/more/more';
import Like from './app/components/like/like';

ReactDOM.render(
	<div>
		<Search />
		<Header source="http://localhost:3000/data/swiper" />
		<Otherapp source="http://localhost:3000/data/otherapp" />
		<Spike source="http://localhost:3000/data/spike" />
		<More source="http://localhost:3000/data/more" />
		<Like source="http://localhost:3000/data/like" />
	</div>,
	document.querySelector("#myApp")
);
