var express = require('express');
var router = express.Router();
const { Game, Publisher, Platform, PlatformsGames } = require('../orm/models');

router.get('/', (req, res) => {
  Game.findAll({
    include: [Publisher, Platform]
  })
  .then(game => {
    res.json(game);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
});

module.exports = router;