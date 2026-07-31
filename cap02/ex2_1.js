//CRIA REFERENCIA AO FORM E AO ELEMENTO H3(ONDE SERÁ EXIBID A RESPOSTA)

const frm = document.querySelector("form"); // selecionou o formulario da pagina | Guarda ele na variável frm.
const resp = document.querySelector("h3"); // Seleciona o elemento <h3>. | Ele será usado para mostrar a resposta na tela.

frm.addEventListener("submit", (e) => { /*
                                            Adiciona um ouvinte de evento ao formulário.
                                            O evento submit acontece quando o botão Mostrar é clicado.
                                            e representa o evento.
                                        */
    const nome = frm.inNome.value; // Pega o valor digitado no input. inNome é o id do input. 
                                  // .value acessa o texto que o usuário digitou.
                                    
    resp.innerText = `Ola ${nome}`; //Coloca um texto dentro do <h3>.
                                   //Usa template string (crase ``) para juntar texto com a variável.
                                  //Exibe algo como: Ola Maria.
    e.preventDefault(); //mpede o comportamento padrão do formulário.Sem isso, a página seria recarregada ao enviar o form.
});
