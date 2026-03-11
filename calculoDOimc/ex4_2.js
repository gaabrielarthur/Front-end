const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
//ouvinte de evento, acionadoquando o botão submit é clicado 
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita envio do formulario

    const name = frm.inNome.value; //obtém os valores de form acessando frm , id e value
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);

    let peso; // declara aa variavel peso com let, pois pode alterar
    if (masculino == true) { // EXECUTA A condição se for verdadeiro 
        peso = 22 * Math.pow(altura, 2); //math.pow eleva ao quadrado
    } else {
        peso = 21 * Math.pow(altura, 2);
    }
// Exibe Resposta (altera o conteudo na tag h3 da pagina)
    resp1.innerText = `${name}: Seu peso ideal é ${peso.toFixed(2)}kg`;

});