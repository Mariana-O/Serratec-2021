const ler = require("prompt-sync")();

pagamento = ler("Pagamento:");

if( pagamento >= 1000) console.log("Pagamento em cheque");
else if( pagamento < 1000) console.log("Pagamento em dinheiro");