const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const saque = Number(frm.invalorSaque.value);
    if (saque % 10 != 0) {
        alert("valor inválido para notas disponiveis(R$ 10, 50 ,100)");
        frm.invalorSaque.focus()
        return
    }

    const notasCem = Math.floor(saque / 100);
    let resto = saque % 100;
    const notasCinqueta = Math.floor(resto / 50);
    resto = resto % 50;
    const notasDez = Math.floor(resto / 10);
    if (notasCem > 0) {
        resp1.innerText = `Notas de R$100: ${notasCem}`;
    }
    if (notasCinqueta > 0) {
        resp2.innerText = `Notas de R$50: ${notasCinqueta}`

    } if (notasDez > 0) {
        resp3.innerText = `Notas de R$10: ${notasDez}`
    }


})