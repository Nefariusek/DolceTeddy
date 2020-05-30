import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from '../Homepage/index.jsx';
import NavBar from '../NavBar/index.jsx';
import OurCats from '../OurCats/index.jsx';
import Contact from '../Contact/index.jsx';
import Footer from '../Footer/index.jsx';

import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className="LayoutHeader">
				<NavBar />
			</div>
			<div className="LayoutContent">
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/ourcats" component={OurCats} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
			</div>
			<div className="LayoutFooter">
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
