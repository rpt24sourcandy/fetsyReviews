import React from 'react';
import ReviewsNav from './reviewsNav.jsx';
import SingleReview from './singleReview.jsx';
import { Feed, Pagination } from 'semantic-ui-react';

class DataReviews extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1,
			totalPages: Math.ceil(this.props.reviews.length / 5),
		};
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (this.props.reviews !== prevProps.reviews) {
			this.setState({
				totalPages: Math.ceil(this.props.reviews.length / 5),
			});
		}
	}

	handlePageChange(e, data) {
		this.setState({
			page: data.activePage,
		});
	}

	render() {
		const visibleReviews = this.props.reviews.slice((this.state.page - 1) * 5, (this.state.page - 1) * 5 + 5);
		return (
			<div>
				<ReviewsNav reviews={this.props.reviews} />
				<div>
					<Feed>
						{this.props.reviews.length > 0
							? visibleReviews.map((review) => {
									return <SingleReview review={review} key={review.id} />;
							  })
							: ''}
					</Feed>
					<Pagination onPageChange={this.handlePageChange} defaultActivePage={1} totalPages={this.state.totalPages} boundaryRange={0} ellipsisItem={undefined} siblingRange={1} firstItem={null} lastItem={null} />
				</div>
				<br />
			</div>
		);
	}
}

export default DataReviews;
