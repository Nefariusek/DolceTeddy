import React, { Component } from 'react';
import './Aboutus.css';
import NavBar from '../NavBar';

export class Aboutus extends Component {
	render() {
		return (
			<div className="site">
				<div className="menu" style={{ height: '15%' }}>
					<NavBar />
				</div>
				<div className="content">
					<div className="title">Nasza hodowla</div>

					<div className="mainContent"></div>
				</div>
			</div>
		);
	}
}

export default Aboutus;
