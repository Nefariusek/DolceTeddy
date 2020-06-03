import React, { Component } from 'react';
import './Homepage.css';
//import middleHigherPhoto from '../../img/middleHigher.jpg';
//import middleLowerPhoto from '../../img/middleLower.jpg';
//import leftPhoto from '../../img/left.jpg';
//import rightPhoto from '../../img/right.jpg';

export class Homepage extends Component {
	render() {
		return (
			<div className="app">
				<div className="site">
					hejhej
					<div className="leftDiv">
						<div>
							<img
								className="photo"
								src="https://res.cloudinary.com/dhqxcq0je/image/upload/v1591144785/left_yytj0k.jpg"
								alt=" tu zdj"
							/>
							<h1 className="photoTitle">MIOTY</h1>
						</div>
					</div>
					<div className="middleDiv">
						<div className="higherDiv">
							<img
								className="photo"
								src="https://res.cloudinary.com/dhqxcq0je/image/upload/v1591144785/middleHigher_ftqzm4.jpg"
								alt=" tu zdj"
							/>
							<h1 className="photoTitle">KOT W DOMU</h1>
						</div>
						<div className="lowerDiv">
							<img
								className="photo"
								src="https://res.cloudinary.com/dhqxcq0je/image/upload/v1591144785/middleLower_mguypp.jpg"
								alt=" tu zdj"
							/>
							<h1 className="photoTitle">NASZE KOTY</h1>
						</div>
					</div>
					<div className="rightDiv">
						<div>
							<img
								className="photo"
								src="https://res.cloudinary.com/dhqxcq0je/image/upload/v1591144785/right_vj8ses.jpg"
								alt=" tu zdj"
							/>
							<h1 className="photoTitle">HODOWLA</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;
