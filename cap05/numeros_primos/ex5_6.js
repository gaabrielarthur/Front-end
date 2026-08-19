const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// adicionar o botão de escuta
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do fórmulario 
    const num = Number(frm.numero.value);
    let numDivisores = 0; // ? variável para contar os numeros que são primos 

    // estrutura de repetição mais verificação 
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) { // ! verificação se é divisivel por 1 e por ele mesmo 
            numDivisores++;
        }
    }
    if(numDivisores == 2){ // ! verifica se possui apenas 2 divisores 
        resp.innerText = `${num} é primo`;
    }else{ // ! se não for primo imprimi a resposta abaixo 
         resp.innerText = `${num} não é primo`;
    }
});