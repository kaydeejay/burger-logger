const express = require('express');
const router = express.Router();
const item = require('../models/item');

router.get('/', (req,res) => {
  item.all((data) => {
    const hbsObject = {burgers: data};
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', (req,res) => {
  item.create(
    ['burger','devoured'],
    [req.body.burger, req.body.devoured],
    (result) => {
      res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req,res) => {
  let condition = 'id = ' + req.params.id;

  console.log('condition', condition);
  item.update(
    {devoured: req.body.devoured},
    condition,
    (result) => {
      if (result.changedRows === 0){
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

router.delete('/api/burgers/:id', (req,res) => {
  let condition = 'id = ' + req.params.id;

  item.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;