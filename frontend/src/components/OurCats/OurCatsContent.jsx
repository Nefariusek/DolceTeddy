import React, { Component } from 'react';
import axios from 'axios';
import { FacebookProvider, Page } from 'react-facebook';

import './OurCats.css';
import CatsTable from './CatsTable.jsx';

export default class OurCatsContent extends Component {
	state = {
		results: [],
	};

	catsTableRef = React.createRef();

	getCats = async () => {
		await axios({
			url: 'api/cat',
			method: 'GET',
		}).then(
			(res) => {
				this.setState({ results: res.data.cat });
			},
			(err) => {
				console.log(err);
			},
		);
	};

	componentDidMount() {
		this.getCats();
	}

	componentDidUpdate() {
		this.catsTableRef.current.setState({ results: this.state.results });
	}

	render() {
		return (
			<div>
				<div className="container-all">
					<div className="container-content">
						<h1>Nasze koty</h1>
						<CatsTable ref={this.catsTableRef} />
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
