const frm = document.querySelector("form"); // adicionei toda tag FORM DENTRO DA VARIAVEL FRM DO JS
const resp1 = document.querySelector("h2"); // TAG H2  VOU ARMAZENA A SAIDA DO QUE VOU COLOCAR DENTRO DA VARIAVEL RESP1
const resp2 = document.querySelector("h3"); // TAG H3  VOU ARMAZENA A SAIDA DO QUE VOU COLOCAR DENTRO DA VARIAVEL RESP2

//adiciona um evento ao formulario.
//"submit" significa que o código executa quando clicar no botão.
//(e) representa o evento que está acontecendo.
//=> { inicia uma função.
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // serve para não fazer o envio do formulario 

    const nomeDOproduto = frm.inName.value;  //Pega o que foi digitado no campo com id="innome".
    //.value pega o texto digitado,Guarda na variável produto.
    const valorDOproduto = Number(frm.inPreco.value); //executa a mesma coisa,porém Number() transforma o texto em número.
    const entrada = valorDOproduto / 2;
    const parcela = entrada / 12;


    resp1.innerText = `${nomeDOproduto} valor de entrada R$${entrada.toFixed(2)}`;
    resp2.innerText = `+12x de R$${parcela.toFixed(2)}`; //Mostra no <h3> o valor da terceira unidade.
                                                                        //Mostra no <h3> o valor da terceira unidade.


})

/* 
 O usuário digita produto e preço

Clica em Ver promoção

O programa calcula:

50% na terceira unidade

Total da promoção

Mostra os resultados na tela
*/