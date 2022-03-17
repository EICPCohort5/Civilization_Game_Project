var express = require('express');
var router = express.Router();
const { Platform } = require('../orm/models');

router.get('/', (req, res) => {
  Platform.findAll()
  .then(platform => {
    res.json(platform);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
});

router.get('/:id', (req, res) => {
  Platform.findOne({
    where: {
      platformId: req.params['id']
    }
  })
  .then(platform => {
    res.json(platform);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
});

module.exports = router;