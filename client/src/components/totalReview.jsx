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
		let ratingAvg = ratingSum / this.props.reviews.length;
		return (
			<div>
				<h3 className="total-reviews">
					{(this.props.reviews.length + 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} reviews{' '}
					<span>
						{' '}
						<Rating icon="star" rating={Math.ceil(ratingAvg)} defaultRating={3} maxRating={5} size="huge" disabled />{' '}
					</span>
				</h3>
			</div>
		);
	}
}

export default TotalReview;
