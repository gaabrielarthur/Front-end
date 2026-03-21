const frm = document.querySelector("form"); // obtém elementos da página
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do formulario 

    const numero = Number(frm.inNumero.value); // acessa 
    const raiz = Math.sqrt(numero); // faz o calculo da raiz quadrada
    if (Number.isInteger) {  //Number.isInteger serve para verificar se um numero é inteiro
        resp.innerText = `Raiz: ${raiz}`; // se numero for inteiro imprimi a resposta 
    } else { // se não
        resp.innerText = `Esse numero não á raiz exata para esse numero ${numero}`;
    }
});