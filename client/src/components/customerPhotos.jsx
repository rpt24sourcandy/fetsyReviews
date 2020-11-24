import React from 'react';

class CustomerPhotos extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.reviews.length > 0
					? this.props.reviews.map((review) => {
							return <img src={review.image_url} key={review.id}></img>;
					  })
					: ''}
			</div>
		);
	}
}

export default CustomerPhotos;
