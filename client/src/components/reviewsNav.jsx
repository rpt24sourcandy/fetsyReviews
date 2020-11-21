import React from 'react';

class ReviewsNav extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				Reviews for this item {this.props.reviews.length} <br />
				Review for this shop 1,088
				<div>Sort by: Recommended</div>
			</div>
		);
	}
}

export default ReviewsNav;
