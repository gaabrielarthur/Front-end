const prompt = require("prompt-sync")()//adiciona o pacote ao programa
const salario = Number(prompt("Sálario R$: ")) // lê entrada
const tempo = Number(prompt("Tempo(anos): "))
const quadrienios = Math.floor(tempo/4) // arredonda o valor final pra baixo ex: 4.6 passa a ser 4.0
const acrecimos = salario * quadrienios / 100 // cálculo quadriênios
console.log(`Quadrienios: ${quadrienios}`) // ..e acréscimo
console.log(`Salário Final R$: ${(salario+acrecimos).toFixed(2)}`) // exibe resposta