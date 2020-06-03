import React, { Component } from 'react';
import './Footer.css';
import logo from '../../img/logo.png';
export default class index extends Component {
	render() {
		return (
			<div className="footer">
				<div className="footer-content">
					<div className="footer-section about">
						<img src={logo} alt="logo" style={{ color: 'white', filter: 'invert(1)', width: '18vw' }}></img>
						<p>Hodowla Święty Kot Birmański</p>
						<p>[jakis krotki opis tutaj]</p>
						<br />
						<br />
						<div className="contact">
							<span>Telefon: &nbsp;604-511-407</span>
							<span>Email: &nbsp;hodowla@dolceteddy.pl</span>
						</div>
						<div className="socials"></div>
					</div>

					<div className="footer-section links">
						<h2>Szybki dostęp</h2>
						<br />
						<ul>
							<a href="/">
								<li>Home</li>
							</a>
							<a href="/aboutus">
								<li>Nasza hodowla</li>
							</a>
							<a href="/ourcats">
								<li>Nasze koty</li>
							</a>
							<a href="#">
								<li>Nasze mioty</li>
							</a>
							<a href="#">
								<li>Kot w domu</li>
							</a>
						</ul>
					</div>
					<div className="footer-section contact-form">
						<h2>Napisz do nas!</h2>
						<br />
						<form action="">
							<input
								type="email"
								className="text-input contact-input"
								placeholder="Wpisz swój email..."
								name=""
								id=""
							/>
							<textarea
								rows="7"
								style={{ resize: 'none' }}
								name="message"
								className="text-input contact-input"
								placeholder="Wpisz wiadomość..."
							></textarea>

							<button type="submit" className="btn">
								<i className="fas fa-envelope"></i>
								Wyślij
							</button>
						</form>
					</div>
				</div>
				<div className="footer-bottom">&copy; Dolce Teddy | 2020</div>
			</div>
		);
	}
}
