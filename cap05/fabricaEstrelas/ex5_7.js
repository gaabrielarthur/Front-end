const frm = document.querySelector("form");
const resp = document.querySelector("#outespaço");

// aqui vou adicionar botão de escuta
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evitar envio do formulario 

    const num = Number(frm.inNum.value);
    let estrelas = "";

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 1) { // verifica se é impar 
            estrelas = estrelas + " * ";
        } else { // se for par 
            estrelas = estrelas + " - ";

        }

    }

    resp.innerText = estrelas;
})
