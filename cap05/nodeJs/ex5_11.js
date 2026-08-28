/*elaborar um programa que leia o nome de uma fruta e um número. O programa deve repetir a exibição 
do nome da fruta, de acordo com o número informado.
utilize o "*" para separar os nomes. 
*/

const prompt = require("prompt-sync")(); // importa o prompt-sync para poder digitar no terminal
const nomeFruta = prompt("Nome da fruta: "); // pede o nome da fruta para o usuário

const num = Number(prompt("quantas vezes quer que imprimi: ")); // pede quantas vezes a fruta será repetida e transforma em número
let resultado = ""; // cria uma variável vazia para guardar o resultado

for (let i = 1; i <= num; i++) { // repete o código de acordo com o número informado

    resultado += nomeFruta + " * ";
    //resultado = resultado + nomeFruta + " * ";  adiciona o nome da fruta e o * no resultado
}
console.log(`${resultado}`); // mostra o resultado no terminal