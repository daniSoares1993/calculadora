// primeiro passo definimos o nome para a função,no caso calcular
/* em seguida definimos 2 parametros para essa função,que é o tipo do botão,
valor real do botao para nossa operação

Implementando a lógica 

/* Função da calcular */

// agora testamos no console.log se os botoes clicados estao sendo inseridos corretamente;

function calcular(tipo,valor){


	// em seguida inserimos,os dois parametros,e definimos se iremos trabalhar com ação ou valor numerico
	//  primeiro testamos se é uma ação if for ação;

	if (tipo === 'acao') {

	// caso for uma ação,iniciamos os trabalhos em cima do valor,seja numerico ou de expressao;
		if(valor === 'C'){

			document.getElementById('visor').value = '';
		}  

		if( valor === '+' || valor ==='-' || valor === '/' || valor ==='*' || valor ==='.'){

			document.getElementById('visor').value += valor; 

		}

		// para darmos valor ao igual,inserimos uma variaver para conseguir chamar depois
		// em seguida conferimos em console para ver se a conta realmente esta sendo inserida 
		if( valor === '='){
			var valorCampo = eval(document.getElementById('visor').value)

			document.getElementById('visor').value = valorCampo
			
			// por se tratar de uma variavel do tipo string,console.log nos da uma retorno do tipo texto
			// para fazer  com que o js efetue a expressao matematica,devemos utilizar o atributo eval
			/* eval - submetemos para essa funcao,um parametro que é uma string ,
			e elaintepreta essa string como se fosse uma instrução JS,como se pegassemos a string
			e jogasse no console assim como fizemos*/
			// utilizamos o eval no console.log para que  ele processe a string no contxto do interpretador js,no caso console.log
			
		}

	} else if (tipo === 'valor') {
	var inserirDados = valor;	
	document.getElementById('visor').value += inserirDados;

	}
}


 
