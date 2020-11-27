import React from 'react';
import { Rating } from 'semantic-ui-react';

class SingleReview extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{ border: '2px solid black' }}>
				{this.props.review.customer_name} <br />
				{this.props.review.date_of_review} <br />
				<Rating icon="star" rating={this.props.review.rating} defaultRating={3} maxRating={5} size="huge" disabled /> <br />
				Mask color: {this.props.review.item_option} <br />
				{this.props.review.review_content} <br />
			</div>
		);
	}
}

export default SingleReview;
