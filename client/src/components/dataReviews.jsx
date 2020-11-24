import React from 'react';
import ReviewsNav from './reviewsNav.jsx';
import SingleReview from './singleReview.jsx';

class DataReviews extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ReviewsNav reviews={this.props.reviews} />
				<div>
					{this.props.reviews.length > 0
						? this.props.reviews.map((review) => {
								return <SingleReview review={review} key={review.id} />;
						  })
						: ''}
				</div>
			</div>
		);
	}
}

export default DataReviews;
