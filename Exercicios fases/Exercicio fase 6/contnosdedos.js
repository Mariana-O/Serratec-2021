const ler = require("prompt-sync")();
contar = ler("Escolha de 0 a 10:")

for(var i = 1; i <= contar; i++) {console.log(i)}
if (contar == 0) console.log("Você interrompeu a contagem:");
