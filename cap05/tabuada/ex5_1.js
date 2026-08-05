const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.tabu.value);
    let resposta = "";
    for (let i = 1; i < 10; i++) {
        resposta = `${resposta}${num} x ${i} = ${num * i}\n`;
    }
    resp.innerText = resposta;
});