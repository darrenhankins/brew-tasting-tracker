var express = require('express');
var router = express.Router();

const dinosaurs = [

];

// render all dinos
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('all', { dinosaurs: dinosaurs});
});

// render one dino
router.get('/:id', function(req, res, next) {
  res.render('single', { dinosaurs: dinosaurs[req.params.id]});
});

// create new dino
router.post('/', function(req, res, next) {
  const dinosaur = req.body;
  dinosaur.id = dinosaurs.length;
  dinosaurs.push(dinosaur);
  res.redirect('/dinosaur/${dinosaur.id}');
});

// update dino
router.put('/:id', function(req, res, next) {
  // const dinosaur = req.body;
  // dinosaur.id = dinosaurs.length;
  // dinosaurs.push(dinosaur);
  // res.redirect('/dinosaur/${dinosaur.id}');
});

// edit form dino
router.put('/:id/edit', function(req, res, next) {
  // const dinosaur = req.body;
  // dinosaur.id = dinosaurs.length;
  // dinosaurs.push(dinosaur);
  // res.redirect('/dinosaur/${dinosaur.id}');
});

// delete dino
router.delete('/:id', function(req, res, next) {
  // const dinosaur = req.body;
  // dinosaur.id = dinosaurs.length;
  // dinosaurs.push(dinosaur);
  // res.redirect('/dinosaur/${dinosaur.id}');
});

module.exports = router;
