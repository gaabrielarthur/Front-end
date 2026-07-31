/* elabore um programa para simular um parquimetro, qual leia o valor depositado em um terminal de estacionamento
rotativo. op programa deve informao tempo de permanencia do veiculo no local e o troco (se existir)
se o valor for inferior ao tempo minimo exiba a mensagem "valor insuficiente"
valores 
1 real 30 min
1,75 60 min
3 reais 120 min 
*/
const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");
// adicionei um botão de escuta 
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do formulario 
    const valor = Number(frm.valor.value); // pego o valor digitado pelo usuario

    let tempo;
    let troco;
    if (valor < 1) {
        resp1.innerText = `Tempo menor que 1 min`
        resp2.innerText = `Valor insuficiente`
    } if (valor >= 3) {
        tempo = 120;
        troco = valor - 3;
        resp1.innerText = `Tempo ${tempo} min`;
        resp2.innerText = `Troco R$${troco.toFixed(2)}`
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
        resp1.innerText = `Tempo ${tempo} min`;
        resp2.innerText = `Troco R$${troco.toFixed(2)}`;
    } else {
        tempo = 30;
        troco = valor - 1;
        resp1.innerText = `Tempo ${tempo} min`;
        resp1.innerText = `Tempo R$${troco.toFixed(2)}`;
    }

})
