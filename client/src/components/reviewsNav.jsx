import React from 'react';
import { Menu, Segment, Label } from 'semantic-ui-react';

class ReviewsNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'reviews for this item',
		};
	}
	render() {
		return (
			<div>
				<Menu pointing secondary>
					<Menu.Item name="reviews for this item" active={this.state.activeItem === 'reviews for this item'} onClick={this.handleItemClick}>
						Reviews for this item
						<Label as="a">{this.props.reviews.length}</Label>
					</Menu.Item>
					<Menu.Item name="reviews for this shop" active={this.state.activeItem === 'reviews for this shop'} onClick={this.handleItemClick}>
						Reviews for this shop
						<Label as="a">{this.props.reviews.length + 1000}</Label>
					</Menu.Item>
				</Menu>
				<div>Sort by: Recommended</div>
			</div>
		);
	}
}

export default ReviewsNav;
