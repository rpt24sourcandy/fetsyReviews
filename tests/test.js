import axios from 'axios';

import { getReviews } from './apiTest';

jest.mock('axios');

describe('get reviews', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
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
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getReviews(2)).resolves.toEqual(data);
  });

  // it('fetches erroneously data from an API', async () => {

  // });
});
