var saldo = 100.5; //Variavel Global
	var nomeusuario = prompt("Bem vindo! Nos informe o seu nome ?")

	alert("Olá, " + nomeusuario + " é um prazer ter você por aqui!")

	function inicio() {
		//ESCOPO
		//Variavel Local
		var escolha = parseInt(prompt('Selecione uma opção: 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair'));
	
		switch(escolha){
		case 1:
			ver_saldo()
			break;
		case 2:
			extrato()
			break;
		case 3:
			fazer_saque()
			break;
		case 4:
			fazer_deposito()
			break;
		case 5:
			transferencia()
			break;
		case 6:
			sair()
			break;
		default:
			erro()
			break;
	}
}

	function ver_saldo() {

		var senha = parseInt(prompt('Insira sua senha'))

		if(senha != 3589){
			alert('Senha incorreta, tente novamente')
			ver_saldo()
		}
		else{
		alert('Seu saldo atual é: ' + saldo);
		inicio();
	}
	}

	function fazer_deposito() {
		
		var senha = parseInt(prompt('Insira sua senha'))

		if(senha != 3589){
			alert('Senha incorreta, tente novamente')
			fazer_deposito()
		}
		else{

		var deposito = parseFloat(prompt('Qual o valor para depósito?'));
		
		// Not a Number --> Isso é um não-número?
		if (isNaN(deposito) || deposito === '') {
			alert('Por favor, informe um número.');
			fazer_deposito();
		}
		else if(deposito == 0 || deposito < 0){
			alert('Operação não autorizada')
			fazer_deposito();
		}
		 else {
			saldo += deposito;
			//saldo = saldo + deposito;
			ver_saldo();
		}
	}
	}

	function fazer_saque() {

		var senha = parseInt(prompt('Insira sua senha'))

		if(senha != 3589){
			alert('Senha incorreta, tente novamente')
			fazer_saque()
		}
		else{

		var saque = parseFloat(prompt('Qual o valor que deseja sacar?'));
		
		if (isNaN(saque) || saque === '') {
			alert('Por favor, informe um número.');
			fazer_saque();
		}
		else if(saque > saldo){
			alert('Operação não autorizada')
			fazer_saque();
		}
		else if(saque == 0 || saque < 0){
			alert('Operação não autorizada')
			fazer_saque();
		}
		 else {
			saldo -= saque;
			//saldo = saldo - saque;
			ver_saldo();
		}
	}
	}

	function transferencia() {

		var senha = parseInt(prompt('Insira sua senha'))

		if(senha != 3589){
			alert('Senha incorreta, tente novamente')
			fazer_saque()
		}
		else{

		var contatranferencia = parseFloat(prompt('informe o número da conta'));

		if (isNaN(contatranferencia) || contatranferencia === '') {
			alert('Por favor, informe número da conta cuja deseja transferir o valor.');
			transferencia();
		}

		var valor_tranferencia = parseInt(prompt('Insira o valor que você deseja transferir'))

		if (valor_tranferencia > saldo){
			alert('Operação não autorizada')
			transferencia();
		}
		else if(valor_tranferencia == 0 || valor_tranferencia < 0){
			alert('Operação não autorizada')
			transferencia();
		}
		else {
			saldo -= valor_tranferencia;
			//saldo = saldo - transferencia;
			ver_saldo();
		}

		}
	}
	function extrato(){
		
		var senha = parseInt(prompt('Insira sua senha'))

		if(senha != 3589){
			alert('Senha incorreta, tente novamente')
			fazer_saque()
		}
		else{
		alert('Cobrança: Amazon Prime Services = R$14,99' + "  |||  " + 'Cobrança: SpotifyPremium = R$19,90'  + "  |||  " + 'Cobrança: Casa de Bolos R$19,90');
		inicio();
	}
	}

	function erro() {
		alert('Por favor, informe um número entre 1 e 6.');
		inicio();
	}

	function sair() {
		var confirma = confirm('Você deseja sair?');
		if (confirma) {
			alert(nomeusuario + ', foi um prazer ter você por aqui!')
			window.close();
		} else {
			inicio();
		}
	}

	inicio();
