var express = require('express');
var router = express.Router();
const { Publisher } = require('../orm/models');

router.get('/', (req, res) => {
  Publisher.findAll()
  .then(publisher => {
    res.json(publisher);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
});

router.get('/:id', (req, res) => {
  Publisher.findOne({
    where: {
      publisherId: req.params['id']
    }
  })
  .then(publisher => {
    res.json(publisher);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
});

module.exports = router;