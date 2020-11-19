import React from 'react';
import axios from 'axios';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			itemId: 1,
		};
		this.getReviews = this.getReviews.bind(this);
	}

	componentDidMount() {
		this.getReviews(this.state.itemId);
	}

	getReviews(itemId) {
		axios
			.get(`http://localhost:3002/api/items/${itemId}/reviews`)
			.then((response) => {
				this.setState({
					reviews: response.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		console.log(this.state.reviews);
		return <div>Main Component</div>;
	}
}

export default Main;
