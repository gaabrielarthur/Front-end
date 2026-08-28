/*
Elaborar um programa que leia um número e verifique se ele é ou não perfeito.
Um número perfeito é aquele que é igual à soma dos seus
divisores inteiros, exceto o próprio número.
O programa deve exibir os divisores do número e a soma deles.
*/
// Seleciona o elemento <form> do HTML
const frm = document.querySelector("form");

// Seleciona o elemento <pre>, onde vamos mostrar o resultado
const resp1 = document.querySelector("pre");

// Cria um evento que será executado quando o formulário for enviado
frm.addEventListener("submit", (e) => {

    // Impede que a página seja recarregada ao enviar o formulário
    e.preventDefault();

    // Pega o valor digitado no campo "num" e transforma em número
    const num = Number(frm.num.value);

    // Variável que vai armazenar os divisores encontrados
    let divisores = "";

    // Variável que vai armazenar a soma dos divisores
    // Começa em 0 porque ainda não encontramos nenhum divisor
    let soma = 0;

    // Começa o contador em 1
    // Continua enquanto i for menor que num
    // Não usamos i <= num porque o próprio número não pode ser considerado
    for (let i = 1; i < num; i++) {

        // Verifica se o resto da divisão de num por i é 0
        // Se for 0, significa que i é um divisor de num
        if (num % i == 0) {

            // Adiciona o divisor encontrado na variável divisores
            // O espaço depois de ${i} separa os números
            divisores = divisores + `${i} `;

            // Adiciona o divisor encontrado à soma
            soma = soma + i;
        }
    }

    // Cria o texto inicial mostrando os divisores encontrados
    // \n significa quebra de linha
    let resultado = `Divisores: ${divisores}\n`;

    // Adiciona a soma dos divisores ao resultado
    resultado = resultado + `Soma: ${soma}\n`;

    // Verifica se a soma dos divisores é igual ao número informado
    if (soma == num) {
        // Se forem iguais, o número é perfeito
        resultado = resultado + `${num} é um número perfeito`;
    } else {
        // Se forem diferentes, o número não é perfeito
        resultado = resultado + `${num} não é um número perfeito`;
    }
    // Mostra todo o resultado dentro do elemento <pre>
    resp1.innerText = resultado;

});