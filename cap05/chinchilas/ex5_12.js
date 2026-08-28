/* 
Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano.
Elaborar um programa que leia o número inicial de chinchilas e anos  e informe ano a ano o número 
médio previsto de chinchilas da fazenda. O número inicial de chinchilas deve ser mair ou igual a 2
(um casal). 
*/
const frm = document.querySelector("form"); // procurei o html do elemento 
const resp = document.querySelector("pre");

// botão de escuta,está dizendo "quando o forumario for enviado execute este codigo"
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do formulario 

    const num = Number(frm.num.value);
    const ano = Number(frm.ano.value);

    let triplo = "";
    let chinchila = num;

    for (let i = 1; i <= ano; i++) {
        triplo += `Ano${i}: ${chinchila} chinchilas\n`;

        chinchila *= 3; // mesma coisa que chinchila = chinchila * 3; 2 → 6 → 18 → 54 → 162
    }
    resp.innerText = triplo;

});