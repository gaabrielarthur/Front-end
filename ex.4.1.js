const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    e.preventDefault();
    const name = frm.inName.value;
    const note1 = Number(frm.inNoteOne.value);
    const note2 = Number(frm.inNoteTwo.value);

    const media = (note1 + note2) / 2;
    resp1.innerText = `media das notas ${media}`;
    if(media >= 7){
        resp2.innerText =`Parabéns ${name} você foi aprovado`;
        resp2.style.color = "blue";
    }else if(media >= 4){
         resp2.innerText = `terá outra chance ${name} está de recuperação`;
        resp2.style.color = "green";
    }
    else{
        resp2.innerText = `Ops ${name} você foi reprovado`;
        resp2.style.color = "red";
    }

});