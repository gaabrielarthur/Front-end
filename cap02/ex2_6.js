const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(frm.inValor.value);
    const tempo = Number(frm.inTempo.value);

    const valorpago = Math.ceil(tempo / 15) * 3;

    resp1.innerText = `valor a ser pago e R$${valorpago}`;
});