// Seleciona o elemento <form> do HTML e guarda na variável frm
const frm = document.querySelector("form");
// Seleciona o <span> onde será mostrado o paciente que está sendo atendido
const respNome = document.querySelector("span");
// Seleciona o <pre> onde será mostrada a lista de pacientes
const respLista = document.querySelector("pre");
// Cria um array vazio para armazenar os nomes dos pacientes
const paciente = [];


// Adiciona um paciente quando o formulário for enviado
frm.addEventListener("submit", (e) => {

    // Impede que o formulário recarregue a página ao ser enviado
    e.preventDefault();

    // Pega o nome digitado no campo inPaciente
    const nome = frm.inPaciente.value;

    // Adiciona o nome do paciente no final do array
    paciente.push(nome);

    // Cria uma string vazia para montar a lista de pacientes
    let lista = "";

    // Percorre o array começando pela posição 0
    for (let i = 0; i < paciente.length; i++) {

        // Adiciona a posição + 1 e o nome do paciente na lista
        lista += `${i + 1}. ${paciente[i]}\n`;
    }

    // Mostra a lista de pacientes dentro do elemento <pre>
    respLista.innerText = lista;

    // Limpa o campo onde o usuário digitou o nome
    frm.inPaciente.value = "";

    // Coloca novamente o cursor no campo de nome
    frm.inPaciente.focus();
});


// Cria uma ação para o botão "Urgencia"
frm.btUrgencia.addEventListener("click", () => {

    // Verifica se o campo obrigatório foi preenchido
    if (!frm.checkValidity()) {

        // Mostra uma mensagem caso o campo esteja vazio
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");

        // Coloca o cursor novamente no campo de paciente
        frm.inPaciente.focus();

        // Interrompe a execução da função
        return;
    }

    // Pega o nome digitado no campo de paciente
    const nome = frm.inPaciente.value;

    // Adiciona o paciente no início do array
    paciente.unshift(nome);

    // Cria uma string vazia para montar novamente a lista
    let lista = "";

    // Percorre todos os pacientes do array
    paciente.forEach((paciente, i) => {

        // Adiciona o número da posição e o nome do paciente na lista
        lista += `${i + 1}. ${paciente}\n`;
    });

    // Mostra a lista atualizada na página
    respLista.innerText = lista;

    // Limpa o campo de nome
    frm.inPaciente.value = "";

    // Coloca o cursor novamente no campo de paciente
    frm.inPaciente.focus();
});


// Cria uma ação para o botão "Atende"
frm.btAtende.addEventListener("click", () => {

    // Verifica se não existem pacientes na lista
    if (paciente.length == 0) {
        // Mostra uma mensagem informando que a fila está vazia
        alert("Não há pacientes cadastrados na lista de espera");
        // Coloca o cursor novamente no campo de paciente
        frm.inPaciente.focus();
        // Interrompe a execução da função
        return;
    }

    // Remove o primeiro paciente da fila e guarda seu nome na variável atende
    const atende = paciente.shift();
    // Mostra o nome do paciente que está sendo atendido
    respNome.innerText = atende;
    // Cria uma string vazia para montar a lista novamente
    let lista = "";
    // Percorre os pacientes que ainda estão esperando
    paciente.forEach((paciente, i) => {

        // Adiciona o número e o nome de cada paciente na lista
        lista += `${i + 1}. ${paciente}\n`;
    });

    // Atualiza a lista de pacientes na página
    respLista.innerText = lista;
});
