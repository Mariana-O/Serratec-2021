/*     Na nossa incrível agência de viagens faremos um pacotão a sua escolha:
1- Precisa ter 3 opções de lugares no mínimo (fica a criatividade do squad);
2 - Fazer um pacote de viagem para cada lugar incluindo adicionais (por exemplo: Viagem para Santa Catarina; passeio no: Beto Carrero; 2 dias de parque,
  e 1 em pontos turísticos; hotel que vai ficar; quantidade de pessoas; formas de pagamento; valor total da viagem);
(obs: é só um exemplo faça a parir da sua imaginação!!) */

const ler = require("prompt-sync")()
console.log("Na nossa incrível agência de viagens faremos um pacotão a escolha do local que você desejar: ")
var locais = Number(locais)
locais = ler ("1 - Curitiba | 2 - Paris  | 3 - Recife: ")
if (locais==1)
console.log("Viagem para Coritiba; Tour Completo; CuritibaXMorretes; Uma passagem por Museu Oscar Niemeyer; Hotel ; 4 pessoas; 12x sem juros no cartão; Valor Total da viagem: R$1800 ")
if (locais==2)
console.log ("Viagem para Paris; Le Grand Tour; Trocadero; DisneyParis; Uma passagem pelo Vale do Loire; Hotel Hilton Paris; 2 pessoas; 12x no cartão sem juros; Valor Total da Viagem: R$18.000")
if (locais==3)
console.log ("Viagem para Recife; Recife Porto de Galinhas; Catedral da Sé; Uma passadinha pela Praia de Calhetas; 1 pessoa; Hotel Radsson; 12x sem juros no cartão; Valor Total da Viagem: R$1200")

