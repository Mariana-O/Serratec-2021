const ler = require("prompt-sync")();

nome = ler("Nome:");
pergunta = ler("Paciente já vacinado?");
var verdadeiro = pergunta != "sim" && "SIM";
if(verdadeiro) console.log(`Paciente sujeito a infecção?: ${verdadeiro}`);
else if (verdadeiro = "nao", "NAO") console.log(`Paciente sujeito a infecção?; ${verdadeiro}`);