//Crie um jogo em que você vai ter que escolher entre
 //3 armas para enfrentar o grande dragão malvado "Progradragão".
  //As armas são uma espada, uma faca e um sapato. Só uma dessas 
 // opções que vai garantir a vitória contra o dragão Antes de 
 // começar o jogo, o mesmo vai pedir o nome do herói, 
  // o nome do herói nos textos do jogo.

  const ler = require("prompt-sync")();
  var heroi = ler("Qual é o nome do seu Herói? ");
  console.log("Grande Herói", heroi,"escolha sua arma para enfrentar o poderoso Progradragão:");
  var arma = ler ("1 - Espada | 2 - Faca | 3 - Sapato: ");
  if (arma==3) {
  console.log("O Progradragão avança em direção a", heroi);
  console.log("para quebrar o seu CTRL+S e desestabilizar");
  console.log("as suas linhas de código até que o herói saca de sua arma lendaria...")
  console.log("O SAPATO e arremessa em direção ao Progradragão que oprimido pelo poder de sua lendária ferramenta cai inconsciente e é derrotado");
  } else { console.log("O heroi pega sua arma para atacar o Progradragão")
  console.log("Mas então logo se percebe que o Progradragão é imune a qualquer tipo dano cortante ou perfurante e apenas sofre dano com ataques contundentes") }