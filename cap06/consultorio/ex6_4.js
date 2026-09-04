const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const paciente = []; // vetor global 

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;

    // adiciona o nome d opaciente no final do array 
    paciente.push(nome);
    // criei uma lista vazia para armazenar a lista de pacientes 
    let lista = "";
    for (let i = 0; i < paciente.length; i++) {
        lista += `${i + 1}. ${paciente[i]}\n`;
    }
    // mostra a lista com os nomes 
    respLista.innerText = lista;

    // limpa o campo o usuario digitou 
    frm.inNome.value = "";

    // colocar o cursor novamente no campo nome 
    frm.inNome.focus();
});

frm.urgencia.addEventListener("click", () => {

    // verifica se o campo obrigatorio foi preencheido 
    if (!frm.checkValidity) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        // coloca o cursor novamente no  campo paciente 
        frm.inNome.focus();

        return;
    }

    const nome = frm.inNome.value;
    // Adiciona o paciente no início do array, adiciona na primeira posição
    paciente.unshift(nome);

    // cria a string vazia para receber do paciente
    let lista = "";

    for (let i = 0; i < paciente.length; i++) {
        lista += `${i + 1}. ${paciente[i]}\n`;
    }

    // mostra a lista atualizada 
    respLista.innerText = lista;

    // limpao campo 
    frm.inNome.value = "";
    // Coloca o cursor novamente no campo de paciente
    frm.inNome.focus();

});

frm.atende.addEventListener("click", () => {
    if (paciente.length == 0) {
        alert("Não `a paciente cadastrado na lista de espera");
        // retorna o cursor novamente para o campo de paciente 
        frm.inNome.focus();

        return;
    }

    // remove o primeiro paciente da fila
    const nome = paciente.shift();

    // mostra o nome do paciente que está sendo atendido
    respNome.innerText = `Paciente em atendimento: ${nome}`;

    // cria uma lista vazia
    let lista = "";

    // percorre os pacientes que ainda estão esperando
    for (let i = 0; i < paciente.length; i++) {

        lista += `${i + 1}. ${paciente[i]}\n`;

    }

    // mostra a lista atualizada
    respLista.innerText = lista;

});