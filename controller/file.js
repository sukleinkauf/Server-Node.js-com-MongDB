var fs = require('fs');

module.exports ={
	read: function(callback){
		var db = req.db;
		var collection = db.get('estoque');
		collection.find({},{},function(e,docs){
			if(err)
				return console.log(err);
			data = JSON.parse(docs);
			callback(data);
		});
	},
}