const { Sequelize } = require('sequelize');

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
});

Review.belongsTo(Item);
Item.hasMany(Review);

Item.findOrCreate({ where: { item_name: 'Wine RANDOM Face Mask with clear and red rhinestones' } });

Item.sync({ force: true });
Review.sync({ force: true });

exports.Item = Item;
exports.Review = Review;
