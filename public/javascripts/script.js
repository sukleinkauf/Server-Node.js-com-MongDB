var db='http://localhost:27017/shopping'

function listagemProdutos(){
			("#tabela").append('<tr class="grey lighten-3">'+
								'<td><img class="imagemtabela card-panel hoverable" src="'+docs[x].img+'"></td>'+
								'<td>'+docs[x].nome+'</td>'+
								'<td>'+docs[x].cor+'</td>'+
								'<td>'+docs[x].valor+'</td>'+
								'<td>'+docs[x].tamanho+'</td>'+
								'<td>'+docs[x].estoque+'</td>'+
								'<td>'+
								'<a class="btn-floating btn-large waves-effect waves-light blue lighten-3 btn-editar" href="#modal1"></a>'+
								'<i class="material-icons">mode_edit</i></td>'+
								'<td>'+
								'<a class="btn-floating btn-large waves-effect waves-light blue lighten-3 btn-apagar" href="#modal1"></a>'+
								'<i class="material-icons">delete</i></td>');
	// });
}

function avisoAdicionar(msg){
	Materialize.toast(msg, 2000, 'rounded')
}

function arrumaModal(modo){
	switch(modo){
	case "editar":
		$(".modal").css({"width":"70%", "max-height":"100%"});
		$( ".editar-adicionar").show();
		$( ".apagar").hide();
		$( "#apagar").hide();
		$( "#adicionar" ).hide();
		$( "#editar" ).show();
		break;
	case "adicionar":
		$(".modal").css({"width":"70%", "max-height":"100%"});
		$( ".editar-adicionar").show();
		$( ".apagar").hide();
		$( "#apagar").hide();
		$( "#editar" ).hide();
		$( "#adicionar" ).show();
		break;
	case "apagar":
		$(".modal").css({"width": "38%","max-height":"40%"});
		$( ".editar-adicionar").hide();
		$( "#editar").hide();
		$( "#adicionar" ).hide();
		$( ".apagar" ).show();
		$( "#apagar" ).show();
		break;
	}
}

function maskmoney(){//máscara para campo de valor
	$("#valor").maskMoney({showSymbol:true, symbol:"R$", decimal:".", thousands:","});
}



function actions(){

	$('.modal').modal();

	$("#adicionar").click(function(){
		var msg="Produto Adicionado com Sucesso!"
		avisoAdicionar(msg)
	});
	$("#editar").click(function(){
		var msg="Produto Editado com Sucesso!"
		avisoAdicionar(msg)
	});
	$("#apagar").click(function(){
		var msg="Produto Excluido com Sucesso!"
		avisoAdicionar(msg)
	});
	$('.tabela').on('click','.btn-editar', function(){
		arrumaModal("editar");
	});
	$('.tabela').on('click','.btn-apagar', function(){
		arrumaModal("apagar");
	});
	$('.btn-adicionar').click(function(){
		arrumaModal("adicionar");
	});

}


$(document).ready(function(){
	actions();
	// listagemProdutos()
	maskmoney();
});