import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Comments from './components/Comments';
import Test from './components/Test';

const App = () => (
	<>	
		<Test />
		<Comments />
	</>
);

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);