import React from 'react';
import { Rating } from 'semantic-ui-react';

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
				<Rating icon="star" defaultRating={3} maxRating={5} />
				<div>
					{this.props.reviews.length} reviews {ratingSum / this.props.reviews.length} rating stars
				</div>
			</div>
		);
	}
}

export default TotalReview;
