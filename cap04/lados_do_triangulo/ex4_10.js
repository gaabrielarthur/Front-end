// Seleciona o formulário da página
const frm = document.querySelector("form");

// Seleciona o elemento <h2>, onde será exibida a mensagem
const resp1 = document.querySelector("h2");

// Seleciona o elemento <h3>, onde será exibido o tipo do triângulo
const resp2 = document.querySelector("h3");

// Adiciona um evento ao formulário quando ele for enviado
frm.addEventListener("submit", (e) => {

    // Impede que a página seja recarregada após clicar em Enviar
    e.preventDefault();

    // Obtém o valor digitado no campo A e converte para número
    const A = Number(frm.A.value);

    // Obtém o valor digitado no campo B e converte para número
    const B = Number(frm.B.value);

    // Obtém o valor digitado no campo C e converte para número
    const C = Number(frm.C.value);

    // Verifica se os três lados podem formar um triângulo
    if (A < B + C && B < A + C && C < A + B) {

        // Exibe uma mensagem informando que é possível formar um triângulo
        resp1.innerText = "Os lados podem formar um triangulo";

        // Verifica se os três lados possuem o mesmo valor
        if (A === B && A === C && B === C) {

            // Exibe que o triângulo é equilátero
            resp2.innerText = "Tipo: Equilatero";

            // Verifica se apenas dois lados são iguais
        } else if (A === B || B === C || A === C) {

            // Exibe que o triângulo é isósceles
            resp2.innerText = "Tipo: Isósceles";

        } else {

            // Se todos os lados forem diferentes, é escaleno
            resp2.innerText = "Tipo: Escaleno";
        }

    } else {

        // Caso não forme um triângulo, informa ao usuário
        resp1.innerText = "Os lados não podem formar um triângulo.";

        // Limpa a mensagem do tipo do triângulo
        resp2.innerText = "";
    }
});