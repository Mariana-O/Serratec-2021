const ler = require("prompt-sync") ();

nome = ler("Nome?:")
empresa = ler("Empresa?:")
funcao = ler("Função?:")
emprestimo = ler(("empréstimo?:"));
emprestimo =  86 * emprestimo / 100
console.log(`Senhor ${nome}, você está com sorte! Pela sua função de ${funcao}, 
e sua excelente relação com a ${empresa}, 
foi aprovado com um crédito em sua conta corrente de R$ ${emprestimo}`);
