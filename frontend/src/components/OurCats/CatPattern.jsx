import React from 'react';

import './CatPattern.css';

class CatPattern extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}

	render() {
		return (
			<div className="cat-box-wrapper">
				<div className="cat-image">
					<img src={this.props.cat.image.url} alt="zdjęcie kotka" />
				</div>
				<div className="cat-info">
					<div className="cat-name">
						<h3>Imię:{this.props.cat.name}</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default CatPattern;
