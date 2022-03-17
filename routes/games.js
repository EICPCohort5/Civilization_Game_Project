var express = require('express');
var router = express.Router();
const { Game, Publisher, Platform } = require('../orm/models');

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

router.get('/:id', (req, res) => {
  Game.findOne({
    where: {
      gameId: req.params['id']
    }
  })
  .then(game => {
    res.json(game);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
});

router.post('/', (req, res) => {
  const newGame = req.body;
  Game.create(newGame)
  .then(game => {
    game.setPlatforms(1);
    return game;
  })
  .then(game => {res.json(game)})
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  });
});

router.patch('/:id', (req, res) => {
  Game.update({
    title: 'Updated Title Example'
  }, {
    where: { gameId: req.params['id'] }
  })
  .then(row => { res.json(row) })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
});

router.delete('/:id', (req, res) => {
  Game.destroy({
    where: {
      gameId: req.params['id']
    }
  })
  .then(() => { res.send(`Game ${req.params['id']} successfully deleted`) })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
});

module.exports = router;