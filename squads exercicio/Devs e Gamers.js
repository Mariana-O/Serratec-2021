const ler = require ("prompt-sync")();
var inteira = 0;
var meia = 0;
var cliente = 0;
var nomes = [];
var Ingresso = [];

while(nomes.length <= 5){
  var nome = ler("Qual é o seu nome?:")
  for (i = 0; i <= nomes.length; i++){
      if(nome == nomes[i]){
        console.log("Esse nome já existe")
        nome = ler("Qual é o seu nome?: ")      }
  }

    nomes.push(nome);
    nomes.indexOf(nome);

  var pagante = ler("Inteira ou Meia? ")

  if(pagante == "meia"){

      if(meia == 2){
        console.log("Todas as meias ja foram comprada, infelizmente seu ingresso será inteira")
        pagante = "inteira"
    }else {
    meia++
    }
    }
    Ingresso.push(pagante);

}
// console.log(nomes)
// console.log(tipoIngresso)
for(i = 0; i < 5; i++){
console.log("\nNome: " + nomes[i] + "\nNumero ingresso: "+ i + "\nTipo ingresso: " + Ingresso[i]);
}