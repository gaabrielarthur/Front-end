const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit" , (e)=>{
    e.preventDefault();

    const VeloPermitida = Number(frm.VeloPermitida.value);
    const VeloCondutor = Number(frm.VeloCondutor.value);

    if(VeloPermitida >= VeloCondutor){
        resp.innerText = `O condutor não cometeu nenhuma infração,dentro da velocidade permitida ${VeloPermitida}km/h`
    } else{
        resp.innerText = `O contudor cometeu uma infração, passou acima da velocidade permitida de ${VeloPermitida} velocidade que passou: ${VeloCondutor}`
    }
})