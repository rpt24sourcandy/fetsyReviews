import controller from '../../server/controller';
jest.mock('../../server/controller');

describe('get controller reviews and return array of reviews', () => {
	it('gets reviews from controller', async () => {
		const mock = jest.spyOn(controller.reviews, 'get');

		const reviews = [
			{
				id: 5,
				customer_name: 'Kazza',
				date_of_review: 'Nov 11, 2020',
				rating: 5,
				review_content: 'Speedy delivery Item nice Recommend',
				image_url: 'https://source.unsplash.com/random',
				item_option: 'Christmas tree+bow',
				createdAt: '2020-11-17T04:04:27.000Z',
				updatedAt: '2020-11-17T04:04:27.000Z',
				ItemId: 2,
			},
		];
		mock.mockImplementation(() => Promise.resolve(reviews));

		await expect(controller.reviews.get()).resolves.toEqual(reviews);
	});
});
