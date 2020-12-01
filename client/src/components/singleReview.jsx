import React from 'react';
import { Rating, Feed, Icon } from 'semantic-ui-react';

class SingleReview extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let image = `https://source.unsplash.com/collection/4389261/${Math.random() * 36}`;
		return (
			<Feed.Event>
				<Feed.Label>
					<img src={image} />
				</Feed.Label>
				<Feed.Content>
					<Feed.Summary>
						<Feed.User>
							<a>{this.props.review.customer_name}</a>
						</Feed.User>
						<Feed.Date>{this.props.review.date_of_review}</Feed.Date>
					</Feed.Summary>
					<Rating icon="star" rating={this.props.review.rating} defaultRating={3} maxRating={5} size="huge" disabled />
					<Feed.Extra text>Mask color: {this.props.review.item_option}</Feed.Extra>
					<Feed.Extra text>{this.props.review.review_content}</Feed.Extra>
				</Feed.Content>
			</Feed.Event>
		);
	}
}

export default SingleReview;
