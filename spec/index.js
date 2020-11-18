const axios = require('axios');

async function getReviews(id) {
	const response = await axios.get(`http://localhost:3002/api/reviews/${id}`);
	return response;
}

module.exports = getReviews;
