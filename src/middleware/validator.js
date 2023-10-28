'use strict';

const validator = (req, res, next) => {
  const name = req.query.name;

  if (name) {
    next();
  } else {
    // res.status(500).send('Missing name query');
    next('Missing name query');
  }
};

module.exports = validator;