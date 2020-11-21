import React from 'react';

class CustomerPhotos extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ul>
					{this.props.reviews.length > 0
						? this.props.reviews.map((review) => {
								return <img src={review.image_url}></img>;
						  })
						: ''}
				</ul>
			</div>
		);
	}
}

export default CustomerPhotos;
