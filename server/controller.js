const { Review } = require('../database');

const controller = {
  reviews: {
    get: (req, res) => {
      Review.findAll({
        where: {
          ItemId: req.params.itemId,
        },
      })
        .then((items) => {
          res.status(200).json(items);
        })
        .catch((err) => {
          res.status(404).send(err);
        });
    },
  },
};

module.exports = controller;
