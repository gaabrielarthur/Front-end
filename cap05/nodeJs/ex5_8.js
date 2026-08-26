// Importa o prompt-sync para permitir a entrada de dados pelo teclado
const prompt = require("prompt-sync")();

console.log("\nAnos de Copa do mundo");
console.log("\nPrograma anos de copa do mundo. Digite 0 caso queira sair ");
console.log("\n------------------------------------------------------------");
do {
    // Solicita o ano ao usuário e converte o valor para número
    const ano = Number(prompt("ano: "));
    // Se o usuário digitar 0, encerra o programa
    if (ano == 0) {
        break;

    // Verifica os anos em que não houve Copa devido à Segunda Guerra Mundial
    } else if (ano == 1942 || ano == 1946) {
        console.log(`\nEste ${ano} não teve copa, devido ter ocorrido (SEGUNDA GUERRA MUNDIAL)`);

    // Verifica se o ano é a partir de 1930 e segue a regra usada no exercício
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log(`Este ano de ${ano} teve copa do mundo`);

    // Caso nenhuma das condições anteriores seja verdadeira
    } else {
        console.log(`Não, este ano de ${ano} não ocorreu copa do mundo`);
    }
// Repete o programa enquanto a condição for verdadeira
} while (true);