import React, { Component } from 'react';
import axios from 'axios';
import { FacebookProvider, Page } from 'react-facebook';

import './OurCats.css';

export default class OurCatsContent extends Component {
	state = {};

	getCats = async () => {
		await axios({
			url: 'api/cat',
			method: 'GET',
		}).then(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			},
		);
	};

	componentDidMount() {
		this.getCats();
	}

	render() {
		return (
			<div>
				<div className="container-all">
					<div className="container-content">
						<h1>Nasze koty</h1>
					</div>
					<div className="container-extra">
						{' '}
						<div className="container-extra-text">Polub nas na Facebooku'u! </div>
						<div className="facebook">
							<FacebookProvider appId="1616352375187490 ">
								<Page
									href="https://www.facebook.com/EuphoriaWorldPL/"
									tabs="timeline"
									adapt_container_width="true"
									scrolling="no"
								/>
							</FacebookProvider>
						</div>
						<div className="container-extra-text">Aktualności </div>
						<div className="news">
							tutaj najnowsze posty itp..
							<br />
							<br />
							<br /> <br />
							<br />
						</div>
						<div className="container-extra-text">Jakieś inne rzeczy jak się chce </div>
						<div className="news">
							jakis content..
							<br />
							<br />
							<br /> <br />
							<br />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
