var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   var db = req.db;
    var collection = db.get('estoque');
	collection.find({},{},function(e,docs){
		res.render('index', {"produtos" : docs, "title" : "Roupas"});
    });
});

module.exports = router;
