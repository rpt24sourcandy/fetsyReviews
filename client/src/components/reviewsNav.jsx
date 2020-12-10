import React from 'react';
import { Menu, Segment, Label, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

const DIV = styled.div`
	display: block;
	margin-left: auto;
	margin-right: 0;
	width: 40%;
`;

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
					<Menu.Item name="reviews for this item" active={this.state.activeItem === 'reviews for this item'} onClick={this.handleItemClick} style={{ fontSize: '16px' }}>
						Reviews for this item
						<Label as="a" style={{ color: 'black', background: '#EAEAEA' }}>
							{this.props.reviews.length}
						</Label>
					</Menu.Item>
					<Menu.Item name="reviews for this shop" active={this.state.activeItem === 'reviews for this shop'} onClick={this.handleItemClick}>
						Reviews for this shop
						<Label as="a" style={{ color: 'black', background: '#EAEAEA' }}>
							{(this.props.reviews.length + 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
						</Label>
					</Menu.Item>
				</Menu>
				<div style={{ display: 'block', marginLeft: 'auto', marginRight: '0', width: '20%' }}>
					<Dropdown text="Sort by: Recommended">
						<Dropdown.Menu>
							<Dropdown.Item text="Recommended" />
							<Dropdown.Item text="Newest" />
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		);
	}
}

export default ReviewsNav;
