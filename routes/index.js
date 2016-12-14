var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// new beer page
router.get('/new', function(req, res){
  res.render('new');
});

// get all beers
router.get('/', function(req, res) {
  knex('beer')
  .then((data) => {
    res.render('index', {data:data});
  });
});

// get specific beer
router.get('/:id', function(req, res) {
  knex('beer')
  .where('id', req.params.id)
  .then((data) => {
    console.log(data);
    // res.render('beer', {data:data});
    res.render('beer', {beer:data[0]});
  });
});

// new beer page
router.get('/edit/:id', function(req, res) {
  knex('beer')
  .where('id', req.params.id)
  .then((data) => {
    console.log(data);

    // res.render('edit', {data:data});
    res.render('edit', {beer:data[0]});
  });
});

// edit a specific beer
router.post('/update/:id', function(req, res) {
  knex('beer')
  .where('id', req.params.id)
  .update({
    name: req.body.name,
    type: req.body.type,
    abv: req.body.abv,
    consumed: req.body.consumed
  })
  .returning('id')
  .then(function(id) {
    res.redirect('/'+id);
    // res.send('Success');
  })
  .catch(function(e) {
    res.json(e);
  });
});

// create a new beer
router.post('/create', function(req,res) {
  knex('beer')
  .insert({
    name: req.body.name,
    type: req.body.type,
    abv: req.body.abv,
    consumed: req.body.consumed
  })
  .returning('id')
  .then(function(id) {
    res.redirect('/'+id);
  })
  .catch(function(e) {
    res.json(e);
  });
});

// delete beer
router.get('/delete/:id', function(req,res) {
  knex('beer')
  .where('id', req.params.id)
  .del()
  .then(function() {
    res.redirect('/');
    // res.send('Success');
  })
  .catch(function(e) {
    res.json(e);
  });
});

module.exports = router;
