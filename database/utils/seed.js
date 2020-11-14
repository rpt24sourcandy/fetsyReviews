const { Sequelize } = require('sequelize');

const db = require('./database');

db.query('DROP TABLE IF EXISTS ITEMS');
db.query('DROP TABLE IF EXISTS REVIEWS');

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

Item.hasMany(Review);
Review.belongsTo(Item);

Item.sync();
Review.sync();

const itemsData = [
	{
		item_name: 'Wine RANDOM Face Mask with clear and red rhinestones',
	},
	{
		item_name: 'washable Face Mask covering with glitter rose gold glitter Custom made, Designer FaceMask, with NO pocket for filter, mask holder lanyard',
	},
	{
		item_name: 'Hanging with my Gnomies face mask made of clear, green and red rhinestones',
	},
	{
		item_name: 'FaceMask mask holder lanyard, washable Face Mask covering with glitter rose gold glitter Custom made, Designer with NO pocket for filter',
	},
	{
		item_name: 'Face Shield with Flippable Face Shield - PPE - Comfortable Elastic Head Band - Full Cover Safety Cover',
	},
	{
		item_name: 'Winter Soldier type of PPE covid -19 mask',
	},
	{
		item_name: 'Halloween Collection, Holiday, Covid PPE, Fall, Thanksgiving, Scrub cap, surgical cap, nurse, doctor, dentist, men, women, buttons,',
	},
	{
		item_name: 'HStar Wars Collection, Mandalorian, Covid PPE, Yoda, The Child, Scrub cap, surgical cap, nurse, doctor, dentist, men, women, buttons,',
	},
	{
		item_name: 'FTP Face Mask Covering Reusable | Hype Beast Hip-Hop Rap Street Wear SuicideBoys Travis Scott Cactus Jack COVID PPE Designer Brand',
	},
	{
		item_name: 'Dry-Fit Moisture-Wicking Adult Face Masks',
	},
];

const addItem = (name) => {
	Item.findOrCreate({ where: { item_name: name } });
};
itemsData.forEach((item) => {
	addItem(item.item_name);
});

exports.Item = Item;
exports.Review = Review;
