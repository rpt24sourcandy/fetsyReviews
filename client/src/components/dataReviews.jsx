import React from 'react';
import ReviewsNav from './reviewsNav.jsx';
import SingleReview from './singleReview.jsx';
import { Feed, Icon } from 'semantic-ui-react';

class DataReviews extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ReviewsNav reviews={this.props.reviews} />
				<div>
					<Feed>
						{this.props.reviews.length > 0
							? this.props.reviews.map((review) => {
									return <SingleReview review={review} key={review.id} />;
							  })
							: ''}
					</Feed>
				</div>
			</div>
		);
	}
}

export default DataReviews;
