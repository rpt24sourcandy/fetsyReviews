import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const IMG = styled.img`
	height: 200px;
	width: 200px;
	border-radius: 10px;
`;

class CustomerPhotos extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const responsive = {
			superLargeDesktop: {
				// the naming can be any, depends on you.
				breakpoint: { max: 4000, min: 3000 },
				items: 5,
			},
			desktop: {
				breakpoint: { max: 3000, min: 1024 },
				items: 4,
			},
			tablet: {
				breakpoint: { max: 1024, min: 464 },
				items: 2,
			},
			mobile: {
				breakpoint: { max: 464, min: 0 },
				items: 1,
			},
		};
		return (
			<div style={{ width: '900px' }}>
				<Carousel responsive={responsive}>
					{this.props.reviews.length > 0
						? this.props.reviews.map((review) => {
								return (
									<div className="image">
										<IMG src={review.image_url} key={review.id} />
									</div>
								);
						  })
						: ''}
				</Carousel>
			</div>
		);
	}
}

export default CustomerPhotos;
