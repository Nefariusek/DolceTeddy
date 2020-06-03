import React, { Component } from 'react';
import './Homepage.css';
import middleHigherPhoto from '../../img/middleHigher.jpg';
import middleLowerPhoto from '../../img/middleLower.jpg';
import leftPhoto from '../../img/left.jpg';
import rightPhoto from '../../img/right.jpg';

export class Homepage extends Component {
	render() {
		return (
			<div className="app">
				<div className="site">
					hejhej
					<div className="leftDiv">
						<div>
							<img className="photo" src={leftPhoto} alt=" tu zdj" />
							<h1 className="photoTitle">MIOTY</h1>
						</div>
					</div>
					<div className="middleDiv">
						<div className="higherDiv">
							<img className="photo" src={middleHigherPhoto} alt=" tu zdj" />
							<h1 className="photoTitle">KOT W DOMU</h1>
						</div>
						<div className="lowerDiv">
							<img className="photo" src={middleLowerPhoto} alt=" tu zdj" />
							<h1 className="photoTitle">NASZE KOTY</h1>
						</div>
					</div>
					<div className="rightDiv">
						<div>
							<img className="photo" src={rightPhoto} alt=" tu zdj" />
							<h1 className="photoTitle">HODOWLA</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;
