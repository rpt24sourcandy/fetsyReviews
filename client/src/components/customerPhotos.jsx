import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class CustomerPhotos extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Carousel>
				<div>
					{this.props.reviews.length > 0
						? this.props.reviews.map((review) => {
								return (
									<div>
										<img src={review.image_url} key={review.id} className="customer-photo" />
									</div>
								);
						  })
						: ''}
				</div>
			</Carousel>
		);
	}
}

export default CustomerPhotos;
