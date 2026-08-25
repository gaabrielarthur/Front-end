const frm = document.querySelector("form");
const resp = document.querySelector("h3");
// adicionar botão de escuta, do formulario 
frm.addEventListener("submit", (e) => {
    //evita envio do form
    e.preventDefault();
    const numero = Number(frm.number.value); // obtém o número informado pelo 
    let resposta = `Entre ${numero} e 1: `
    for (let i = numero; i > 0; i--){
        if(i == 1){
            resposta = `${resposta}${i}.`// resposta = resposta + i + "."
        }else{
            resposta = `${resposta}${i},` // resposta = resposta + i + ","
        }
    }
    resp.inner = resposta
})