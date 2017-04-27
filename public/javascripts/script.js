



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
});