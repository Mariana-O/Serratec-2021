const ler = require("prompt-sync") ();
 var emancipado = ler("Ano de nascimento?:");
 emancipado = 2021 - emancipado;
 console.log("A idade da pessoa é:", emancipado);

 var resultado = emancipado >= 21;
 console.log("A pessoa é emancipada?:", resultado);
