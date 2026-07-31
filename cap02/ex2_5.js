/* UMA FARMACIA ESTA DE PROMOÇÃO: Na compra de duas unidades de um mesmo medicamento,
o cliente recebe como desconto os centavos do valor total. 
Elabore um programa que leia a desccrição e o preço de um medicamneto informe o valor do produto na promoção*/

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const medicamento = frm.inName.value;
    const preco = Number(frm.inPreco.value);

    const promocao = Math.floor(preco) * 2;

    resp1.innerText = `MEDICAMENTO: ${medicamento}`;
    resp2.innerText = `Valor R$: R$${preco.toFixed(2)}`;
    resp3.innerText = `na compra de dois fica apenas R$${promocao.toFixed(2)}`;



});