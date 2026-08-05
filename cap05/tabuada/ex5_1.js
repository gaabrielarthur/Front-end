// Seleciona o elemento <form> da página
const frm = document.querySelector("form");

// Seleciona o elemento <pre>, onde a tabuada será exibida
const resp = document.querySelector("pre");

// Adiciona um evento que será executado quando o formulário for enviado
frm.addEventListener("submit", (e) => {

    // Impede que a página seja recarregada ao clicar em "Imprimir Tabuada"
    e.preventDefault();

    // Obtém o número digitado no campo "tabu" e o converte para Number
    const num = Number(frm.tabu.value);

    // Cria uma variável vazia que armazenará toda a tabuada
    let resposta = "";

    // Laço de repetição que vai de 1 até 9
    // A cada repetição, a variável i representa o multiplicador
    for (let i = 1; i < 10; i++) {

        // Acrescenta uma nova linha à variável resposta.
        // Exemplo na primeira volta:
        // 5 x 1 = 5
        // Na segunda volta:
        // 5 x 2 = 10
        // E assim por diante.
        resposta = `${resposta}${num} x ${i} = ${num * i}\n`;
    }

    // Exibe a tabuada completa dentro da tag <pre>.
    // O <pre> mantém as quebras de linha (\n), deixando cada conta em uma linha.
    resp.innerText = resposta;
});