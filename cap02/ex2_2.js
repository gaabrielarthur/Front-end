/*
Elaborar um programa para um cinema, que leia o titulo e a duração  de um filme em minutos. 
exiba o titulo do filme e converta a duração para horas e minutos conforme destacado  
*/
const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

// criar um ouvinte
frm.addEventListener("submit", (e) => {

    const titulo = frm.inTitulo.value //obtém conteudo do campo formulario 
    const duracao = Number(frm.inDuração.value)

    const horas = Math.floor(duracao / 60) // arredonda pra baixo resultado, conta horas
    const minutos = duracao % 60 // obtém o resto da divisão, conta minutos

    resp1.innerText = titulo // exibe respostas 
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault() // evita o envio do form

})