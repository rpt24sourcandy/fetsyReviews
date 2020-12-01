import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class CustomerPhotos extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const responsive = {
			superLargeDesktop: {
				// the naming can be any, depends on you.
				breakpoint: { max: 4000, min: 3000 },
				items: 9,
			},
			desktop: {
				breakpoint: { max: 3000, min: 1024 },
				items: 7,
			},
			tablet: {
				breakpoint: { max: 1024, min: 464 },
				items: 4,
			},
			mobile: {
				breakpoint: { max: 464, min: 0 },
				items: 1,
			},
		};
		return (
			<Carousel responsive={responsive}>
				{this.props.reviews.length > 0
					? this.props.reviews.map((review) => {
							return (
								<div className="image">
									<img src={review.image_url} key={review.id} className="customer-photo" />
								</div>
							);
					  })
					: ''}
			</Carousel>
		);
	}
}

export default CustomerPhotos;
