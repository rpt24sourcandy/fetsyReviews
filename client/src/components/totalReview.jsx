import React from 'react';

class TotalReview extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let ratingSum = 0;
		for (let i = 0; i < this.props.reviews.length; i++) {
			ratingSum += this.props.reviews[i].rating;
		}
		return (
			<div>
				{this.props.reviews.length} reviews {ratingSum / this.props.reviews.length} rating stars
			</div>
		);
	}
}

export default TotalReview;
