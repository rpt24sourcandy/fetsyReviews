import React from 'react';
import TotalReview from './totalReview.jsx';
import DataReviews from './dataReviews.jsx';

class ListingPageReviews extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<TotalReview reviews={this.props.reviews} />
				<DataReviews reviews={this.props.reviews} />
			</div>
		);
	}
}

export default ListingPageReviews;
