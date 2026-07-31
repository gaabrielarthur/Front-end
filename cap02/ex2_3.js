const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {

    const veiculo = frm.inVeiculo.value // obtém os conteudos 
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50 // valor de entrada
    const parcela = (preco*0.50) / 12 // parcelas 

    resp1.innerText = `Promoção: ${veiculo} ` // exibe o nome do veiculo na tela
    resp2.innerText = `Entrada: ${entrada.toFixed(2)}` // exibe o valor de entrada
    resp3.innerText = `Parcela ${parcela.toFixed(2)}` // valor da parcela
e.preventDefault() // evita o envio do formulario 

})