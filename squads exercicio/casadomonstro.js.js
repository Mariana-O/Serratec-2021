// O teatro do monstro permite a entrada de até 5 pessoas;
// A peça só começa após atingir a lotação máxima;
// Nesta peça é proibida a entrada de menores de 16 anos;
// O gerente quer saber quantos são homens e quantos são mulheres antes da peça começar.


const ler = require("prompt-sync")()
const Limite = 5
var homem = 0;
var mulher = 0;

for (var i=0;i<Limite;i++) {
var idade = Number(idade)
idade = ler ("Qual é a sua idade? ");
if (idade>=16) {
   var genero = ler ("Voce é Homem ou Mulher? ");
   switch (genero){
       case "Homem":
       case "homem":
           console.log("Bem Vindo");
           homem++
        break;
        case "Mulher":
        case "mulher":
            console.log("Bem Vinda");
            mulher++
        break;
   }
} else 
{console.log("Menores de 16 anos não podem entrar");
--i }
}
console.log("Sala lotada");
console.log("Haverá", homem, "homens e", mulher, "mulheres na sala");