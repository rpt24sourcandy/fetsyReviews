import React from 'react';
import axios from 'axios';
import ListingPageReviews from './listingPageReviews.jsx';
import CustomerPhotos from './customerPhotos.jsx';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			itemId: 1,
		};
		this.getReviews = this.getReviews.bind(this);
		this.getCurrentURL = this.getCurrentURL.bind(this);
	}

	componentDidMount() {
		this.getReviews(this.state.itemId);
		this.getCurrentURL();
	}

	getCurrentURL() {
		const parsedURL = new URL(window.location.href);
		let urlPath = parsedURL.pathname.split('/');
		this.setState(
			{
				itemId: Number(urlPath[2]),
			},
			() => this.getReviews(this.state.itemId)
		);
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
		return (
			<div>
				<ListingPageReviews reviews={this.state.reviews} />
				<p id="photos-from-reviews">Photos from reviews</p>
				<CustomerPhotos reviews={this.state.reviews} />
			</div>
		);
	}
}

export default Main;
