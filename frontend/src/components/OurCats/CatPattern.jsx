import React from 'react';

class CatPattern extends React.Component {
	componentDidMount() {
		console.log('sth2');
	}

	render() {
		return (
			<div>
				<div>{this.props.cat.name}</div>
			</div>
		);
	}
}

export default CatPattern;
