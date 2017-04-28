var express = require('express');
var router = express.Router();
var fs = require('fs');
var MongoClient = require ('mongodb'). MongoClient; //incluindo modulo para usar funções disponíveis
var url = 'mongodb://localhost:27017/shopping';
var file = require('./../controller/file');

router.delete('/:fav', function(req, res){
	var params = req.params.fav;// pega parametros digitados e salva
	MongoClient.connect(url, function(err, db) {
		db.collection('estoque').deleteOne(
			{
				"nome": params
			}
		);
	});
});

router.post('/:fav', function(req, res){
	console.log("funcionou");
});

		// var checkname=0;

		// checkname = file.check(data,params);

		// var paramsok= file.includeid(params, data);

		

		// if(checkname == false){
		// 	res.json({'msg':'Usuário já cadastrado!'});
		// }
		// else{
		// 	// file.includeid(data, params);
		// 	data.push(paramsok); //adiciona parametros aos arquivos já existente
		// 	var dataJson = JSON.stringify(data) //transforma variavel em Json
		// 	file.write(dataJson, res);	
		// }
// 	});
// })

module.exports = router;