import React from 'react';
import renderer from 'react-test-renderer';
import sampleReviews from './sampleReview';
import ReviewsNav from '../../client/src/components/reviewsNav.jsx';
import CustomerPhotos from '../../client/src/components/customerPhotos.jsx';
import SingleReview from '../../client/src/components/singleReview.jsx';
import TotalReview from '../../client/src/components/totalReview.jsx';
import Main from '../../client/src/components/main.jsx';
import ListingPageReviews from '../../client/src/components/listingPageReviews.jsx';
import DataReviews from '../../client/src/components/dataReviews.jsx';

describe('Component snapshot renders correctly inital layout', () => {
	test('listing page reviews renders', () => {
		const component = renderer.create(<ListingPageReviews reviews={sampleReviews.sampleReviews} />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	test('data reviews renders', () => {
		const component = renderer.create(<DataReviews reviews={sampleReviews.sampleReviews} />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	test('reviews nav renders', () => {
		const component = renderer.create(<ReviewsNav reviews={sampleReviews.sampleReviews} />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	test('customer photos renders', () => {
		const component = renderer.create(<CustomerPhotos reviews={sampleReviews.sampleReviews} />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	test('single review renders', () => {
		const component = renderer.create(<SingleReview review={sampleReviews.sampleReviews[0]} />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	test('total review renders', () => {
		const component = renderer.create(<TotalReview reviews={sampleReviews.sampleReviews} />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
