var express = require('express');
var router = express.Router();
const { Game, Publisher, Platform } = require('../orm/models');

router.get('/', (req, res) => {
  Game.findAll({})
  .then(game => {
    res.json(game);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
});

module.exports = router;