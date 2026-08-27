const prompt = require("prompt-sync")(); // biblioteca node para ler oque o usuario digita no teclado
const produto = prompt("Produto: "); // lê o nome do produto 
const num = Number (prompt("Numero de etiquetas: ")); // quantidade de etiquetas 

//Cria um laço de repetição até num/2 (pois imprimi 2 etiquetas por linha)
for(let i = 1; i <= num / 2;i++){
    //O padEnd(30) coloca espaços depois de "suco" até completar 30 caracteres.
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`); //Isso serve para separar as duas etiquetas.
}
if(num %  2 == 1){ // se a quantidade de etiquetas for impar...
    console.log(`${produto}`); // imprimi mais uma etiqueta 
}