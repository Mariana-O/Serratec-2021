


/*cA catraca do onibus quebrou e a empresa precisa dos dados da viagem.
Os dados 
necessários para a empresa são quando a pessoa entra no onibus são as seguintes:
Quantas pessoas ja entraram no onibus até o momento; 
Se a pessoa é pagante ou entra com gratuidade;
O total dos ganho até o momento (Considerando a passagem a R$ 4,40). */
//Entrada = pessoas entraram no onibus
//Processamento = numero de pessoas, meia idade, gratuidade
//Saida = o total ganho

const prompt = require("prompt-sync")();
var pessoas;
pessoas = parseInt(prompt("Caro trocador, quantas pessoas estão dentro do ônibus? "));
gratuidade = parseInt(prompt("Trocador, informe o número gestantes, idosos, deficientes e estudantes da Rede Pública: "));


var pagante;
pagante = pessoas - gratuidade;
var pago = pagante4 = 4;

console.log("O total ganho até o momento é R$ "+pago+" reais. O número de passageiros é "+pessoas);

//A Catraca quebrou aqui!!!!!!!!!!

var totalfinal = parseInt(totalfinal);
totalfinal = 0;

do {
    totalfinal = (prompt("Trocador, digite 1 para novo pagante, digite 2 para não pagantes, digite 3 ao final do turno!! "));
    switch (totalfinal==0) {
    case 1:
        (pessoas) = pessoas +1;
        (pago) = pago+4.40;
        break;
    case 2:
        (pessoas) = pessoas +1;
        break;
      }

}while (totalfinal != 3);

console.log("Fim de turno. Total de passageiros: "+pessoas+". Total ganho: R$"+pago+" reais")