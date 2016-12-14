var express = require('express');
var router = express.Router();


/* Get individual beer infor  */
router.get('/beer/:id', function(req, res, next) {
  // var id = req.params.id;
  res.render('beer', { title: 'beer' });
  // knex('table_name')
  // .where()("id",)
  db.get(req.params.id).then(function(data){
    res.render('view', {data:data});
  });

});

router.post('/', function(req, res, next){
  db.create(req.body).then(function(id){
    res.redirect('/'+id);
  })
})

module.exports = router;
