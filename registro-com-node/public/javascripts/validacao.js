function validacao(){
	var nome = document.getElementById("nome").value;
	var cpf = document.getElementById("cpf").value;

	if(nome == ""){
		alert("Por favor digite seu nome")
		document.getElementById("nome").focus();
		return false;
	}

	if(cpf == ""){
		alert("Por favor digite seu cpf")
		document.getElementById("cpf").focus();
		return false;
	}
	return true
}