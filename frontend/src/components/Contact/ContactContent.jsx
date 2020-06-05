import React from 'react';

import './ContactContent.css';

class ContactContent extends React.Component {
	render() {
		return (
			<div className="contact-wrapper">
				<div className="contact-info">informacje kontaktowe</div>
				<br></br>
				<div className="contact-map">mapka</div>
				<br></br>
				<div className="contact-userInput">formularz kontaktowy</div>
			</div>
		);
	}
}

export default ContactContent;
