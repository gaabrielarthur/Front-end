/*Elabora um programa de uma loja que leia o valor de uma conta e o número de vezes 
que um cliente deseja parcelar esse valor 
(em boletos ou carnê) para facilitar o troco, o lojista deseja que as parcelas
 iniciais não tenham centavos , ou seja, centavos apenas na últiima parcela.
 Informe como resposta o valor de cada parcela , considerando essa situação. 
*/

const prompt = require("prompt-sync")(); // adicionei uma biblioteca para ler oque for digitado no teclado 

const valor = Number(prompt("Digite o valor do produto: "));
const num = Number(prompt("Quantidade de parcelas: "));
/* primeiro calcula o valor dividido pelo numero de parcelas que o usuario digitou, 
depois pega o valor dentro do parentes, arrendonda pra baixo e guarda na variavel parcela. 
 ex: 4.9 vai ficar 4*/
const parcela = Math.floor(valor / num); // resumindo calcula sem decimais e arredonda pra baixo

const valorFinal = parcela + (valor % num); //calcula a parcela final 

//enquanto i for menor que num...
console.log(`VALOR: R$${valor}`);
console.log(`NÚMERO DE PARCELAS:${num}\n`);

for(let i = 1; i < num; i++){ 
    console.log(`Parcela ${i} valor: R$${parcela.toFixed(2)}`);

}

console.log(`Valor da ultima parcela: R$${valorFinal}`);

