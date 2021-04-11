const ler = require("prompt-sync")();

var nome = ler ("Qual seu nome?");
var apelido = ler ("Como gostaria de ser chamado?");

console.log("Bom te conhecer " + nome,", Posso te chamar de? " + apelido);
