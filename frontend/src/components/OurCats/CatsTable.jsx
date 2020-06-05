import React from 'react';
import CatPattern from './CatPattern.jsx';

class CatsTable extends React.Component {
	state = {
		results: [],
	};

	arrayToTable = (arr) => {
		let key = 0;
		return arr.map((elem) => {
			return <CatPattern cat={elem} key={key++} />;
		});
	};

	render() {
		return <div>{this.arrayToTable(this.state.results)}</div>;
	}
}

export default CatsTable;
