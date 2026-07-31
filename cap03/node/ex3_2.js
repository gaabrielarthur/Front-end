// inicializando a pasta node para entrada de dados
const prompt = require("prompt-sync")()
const veiculo = prompt("Veiculo: ") 
const preco = Number(prompt("Preço do Veiculo: "))
const entrada = preco * 0.50 //calcula o valor de entrada
const parcela = entrada / 12 // calcula o valor da parcela
console.log(`Veiculo: ${veiculo}`) // imprimi o nome do veiculo  
console.log(`Preço do veiculo: R$${preco.toFixed(2)}`) // imprimi o preço do veiculo  
console.log(`Valor de entrada: R$${entrada.toFixed(2)}`) // imprimi o valor de entrada no veiculo 
console.log(`Valor da parcela fica +12 de R$${parcela.toFixed(2)}`) // imprimi o valor da parcela do veiculo