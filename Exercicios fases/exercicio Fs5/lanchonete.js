const ler = require("prompt-sync")();

var nome = ler("Cliente:")
console.log(`Bem vindo, ${nome} escolha os complementos do seu pedido:`);
var complementoum = ler("Q= queijo, B= bacon, A= alface, T= tomate, P= picles, C= cebola, O= ovo frito");
var escolha1;
var escolha2;

switch (complementoum) {
    case ("Q"):
        escolha1 = "Queijo"
        console.log("Tudo bem, vamos adcionar queijo");
        break;

    case ("B"):
        escolha1 = "Bacon"
        console.log("Tudo bem, vamos adcionar bacon");
        break;

    case ("A"):
        escolha1 = "Alface"
        console.log("Tudo bem, vamos adcionar alface");
        break;

    case ("T"):
        escolha1 = "Tomate"
        console.log("Tudo bem, vamos adcionar tomate");
        break;

    case ("P"):
        escolha1 = "Picles"
        console.log("Tudo bem, vamos adcionar picle");
        break;

    case ("C"):
        escolha1 = "Cebola"
        console.log("Tudo bem, vamos adcionar cebola");
        break;

    case ("O"):
        escolha1 = "Ovo Frito"
        console.log("Tudo bem, vamos adcionar ovo frito");
        break;
}
console.log("== Primeiro complemento ==");
var complementodois = ler("Q= queijo, B= bacon, A= alface, T= tomate, P= picles, C= cebola, O= ovo frito");

switch (complementodois) {
    case ("Q"):
        escolha2 = "Queijo"
        console.log("Tudo bem, vamos adcionar queijo");
        break;

    case ("B"):
        escolha2 = "Bacon"
        console.log("Tudo bem, vamos adcionar bacon");
        break;

    case ("A"):
        escolha2 = "Alface"
        console.log("Tudo bem, vamos adcionar alface");
        break;

    case ("T"):
        escolha2 = "Tomate"
        console.log("Tudo bem, vamos adcionar tomate");
        break;

    case ("P"):
        escolha2 = "Picles"
        console.log("Tudo bem, vamos adcionar picle");
        break;

    case ("C"):
        escolha2 = "Cebola"
        console.log("Tudo bem, vamos adcionar cebola");
        break;

    case ("O"):
        escolha2 = "Ovo Frito"
        console.log("Tudo bem, vamos adcionar ovo frito");
        break;

}

if (complementoum == "A" || complementoum == "T" || complementoum == "P"
    || complementodois == "A" || complementodois == "T" || complementodois == "P") {

    var molho = Number(ler("Você deseja molho ?\nDigite 1 - Sim\nDigite 2 - Não"));

    switch (molho) {
        case (1):
            console.log("Lanche com", escolha1, "e", escolha2, ",com molho.");
            break;
        case (2):
            console.log("Lanche com", escolha1, "e", escolha2, ",sem molho.");
            break;
    }
} else {
    console.log("Lanche com", escolha1, "e", escolha2, ",sem direto a molho.");
}