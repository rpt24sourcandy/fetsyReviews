import React from 'react';
import TotalReview from './totalReview.jsx';

class ListingPageReviews extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<TotalReview reviews={this.props.reviews} />
				<ul>
					{this.props.reviews.length > 0
						? this.props.reviews.map((review) => {
								return <li>{review.customer_name}</li>;
						  })
						: ''}
				</ul>
			</div>
		);
	}
}

export default ListingPageReviews;
