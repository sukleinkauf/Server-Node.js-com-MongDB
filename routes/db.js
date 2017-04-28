var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/estoque', function(req, res, next) {
	var db = req.db;
	var collection = db.get('estoque');
	collection.find({},{},function(e,docs){
		res.json(docs);
	});
});

router.get('/cores', function(req, res, next) {
	var db = req.db;
	var collection = db.get('cores');
	collection.find({},{},function(e,docs){
		res.json(docs);
	});
});

router.get('/tamanhos', function(req, res, next) {
	var db = req.db;
	var collection = db.get('tamanhos');
	collection.find({},{},function(e,docs){
		res.json(docs);
	});
});

router.get('/categorias', function(req, res, next) {
	var db = req.db;
	var collection = db.get('categorias');
	collection.find({},{},function(e,docs){
		res.json(docs);
	});
});

module.exports = router;
