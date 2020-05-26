import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from '../Homepage';
import NavBar from '../NavBar';
import OurCats from '../OurCats';
import Footer from '../Footer';

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
				</Switch>
			</div>
			<div className="LayoutFooter">
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
