const frm = document.querySelector("form")
const resp = document.querySelector("h2")

// adicionar um botão de escuta
frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const horaBrasil = Number(frm.inTime.value) // não muda 
    let horaFranca = horaBrasil + 5 // pode mudar
if(horaFranca > 24){

    horaFranca = horaFranca - 24 
}

resp.innerText = `Hora na frança:${horaFranca.toFixed(2)}`
})