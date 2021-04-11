const ler = require("prompt-sync")();
playerum = ler("Player 1:");
playerdois = ler("Player 2:");
 var resultadoum = playerum >= playerdois;
 var resultadodois = playerdois >= playerum;
 var empate = playerum == playerdois;
console.log(`Palayer 1 venceu?: ${resultadoum}.`);
console.log(`Player 2 venceu?: ${resultadodois}`);
console.log(`Houve empate?:${empate}`);