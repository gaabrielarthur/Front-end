/*
Elaborar um programa para um restaurante que leia o preço 
por kg e o consumo (em gramas) de um cliente. Exiba o valor a ser pago 
*/
const frm = document.querySelector("form"); //armazenei o formulario em frm
const resp = document.querySelector("h3");  // vou armazena a respota no java script pra sair na linha h3 e mostrar na tela do usuario 

// vou criar um ouvinte 
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inquilo.value); //obtém conteúdos dos campos
    const consumo = Number(frm.inconsumo.value);

    const valor = (quilo / 1000) * consumo; // calcular o valor a  ser pago
    resp.innerText = `Valor a Pagar R$: ${valor.toFixed(2)}` // Exibe a resposta o elemento toFixed serve para ter apenas 2 algarismos depois da virgula

    e.preventDefault();
})
