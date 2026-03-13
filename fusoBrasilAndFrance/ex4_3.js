const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const horarioBR = Number(frm.inHorabrasil.value);
    let horafrance = horarioBR + 5;
    if(horafrance > 24){
        horafrance = horafrance - 24;
    }
    resp.innerText = `Hora na França:${horafrance.toFixed(2)}`;

})