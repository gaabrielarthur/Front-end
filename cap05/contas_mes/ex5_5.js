const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = ""; // string com a resposta a ser exibida
let numContas = 0; // incializa o contador pra somar tudo 
let valorTotal = 0; // e acumula as variaveis globais 
//adicionei botão de escuta 
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // não fazer o envio do formulario

    const descricao = frm.inDescricao.value;
    const valor = Number(frm.inValor.value);

    if(numContas >=5){
        alert("Você já castrou 5 contas! vamos somar agora.")
        return;
    }
    numContas++;
    valorTotal = valorTotal + valor; // posso abreviar também valorTotal += valor; 
    resposta += descricao + "- R$: " + valor.toFixed(2) + "\n";
    resp1.innerText = `${resposta}------------------`;
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`;

    frm.inDescricao.value = ""; // limpar campos form
    frm.inValor.value = "";
    frm.inDescricao.focus(); // posiciona o campo inDescricao no form 
});