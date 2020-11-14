const { Sequelize } = require('sequelize');
const itemsData = require('./itemsSeed');
const reviewsData = require('./reviewsSeed');

const db = require('./database');

var Item = db.define('Item', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	item_name: Sequelize.STRING,
});

var Review = db.define('Review', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	customer_name: Sequelize.STRING,
	date_of_review: Sequelize.STRING,
	rating: { type: Sequelize.INTEGER, min: 0, max: 5 },
	review_content: Sequelize.STRING,
	image_url: Sequelize.STRING,
	item_option: Sequelize.STRING,
});

Item.hasMany(Review);
Review.belongsTo(Item);

db.query('SET FOREIGN_KEY_CHECKS = 0')
	.then(function () {
		return db.sync({ force: true });
	})
	.then(function () {
		return db.query('SET FOREIGN_KEY_CHECKS = 1');
	})
	.then(
		function () {
			const addItem = (name) => {
				Item.findOrCreate({ where: { item_name: name } });
			};
			itemsData.forEach((item) => {
				addItem(item.item_name);
			});

			const addReview = (name, date, rating, content, imgurl, itemId, option) => {
				Review.findOrCreate({
					where: {
						customer_name: name,
						date_of_review: date,
						rating: rating,
						review_content: content,
						image_url: imgurl,
						ItemId: itemId,
						item_option: option,
					},
				});
			};
			reviewsData.forEach((review) => {
				addReview(review.customer_name, review.date_of_review, review.rating, review.review_content, review.image_url, review.ItemId, review.item_option);
			});
			console.log('Database synchronised.');
		},
		function (err) {
			console.log(err);
		}
	);

exports.Item = Item;
exports.Review = Review;
