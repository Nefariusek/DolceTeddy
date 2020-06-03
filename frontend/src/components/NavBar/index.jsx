import React, { Component } from 'react';
//import logo from '../../img/logo.png';
//import bars from '../../img/bars.png';

import './NavBar.css';

class NavBar extends Component {
	state = {
		isExpanded: false,
	};

	handleToggle(e) {
		e.preventDefault();
		this.setState({
			isExpanded: !this.state.isExpanded,
		});
	}
	render() {
		return (
			<header>
				<div class="menu-toggle" id="hamburger"></div>
				<div class="overlay"></div>
				<div class="container">
					<nav className="nav">
						<i className="fa fa-bars" aria-hidden="true" onClick={(e) => this.handleToggle(e)}>
							<img
								src="https://res.cloudinary.com/dhqxcq0je/image/upload/v1591144785/bars_cxle0k.png"
								alt="logo"
								style={{ width: '50px', height: '40px', margin: '10px' }}
							/>
						</i>
						<h1 class="brand">
							<a href="/">
								<img
									src="https://res.cloudinary.com/dhqxcq0je/image/upload/v1591144785/logo_spjxxy.png"
									alt="logo"
									style={{ width: '220px', height: '40px', margin: '10px' }}
								></img>
							</a>
						</h1>
						<ul className={`collapsed ${this.state.isExpanded ? 'is-expanded' : ''}`}>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/contact">Kontakt</a>
							</li>
							<li>
								<a href="/aboutus">Nasza hodowla</a>
							</li>
							<li>
								<a href="/ourcats">Nasze koty</a>
							</li>
							<li>
								<a href="#">Nasze mioty</a>
							</li>
							<li>
								<a href="#">Kot w domu</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default NavBar;
