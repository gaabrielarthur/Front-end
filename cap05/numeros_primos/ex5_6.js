/* 

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// adicionar o botão de escuta
frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita o envio do fórmulario 
  const num = Number(frm.numero.value);
  let numDivisor = 0;
  for(let i = 1; i<= num; i++){
    if(num % i == 0){
        numDivisor++; // se for incrementa contador 
    }

  }
  if(numDivisor == 2){   // ? conferir se tem dois divisores 
    resp.innerText = `${num} é primo` // se tiver é primo 
  }else{ // se não tiver 
    resp.innerText = `${num} não é primo` // não é primo
  }
}); 
*/
// dessa forma é mais lenta pois o usuário vai digitar e o programa vai testar um por um 
// se o usuário digitar um numero com 3 casas decimais  dentro for iria percorrer todos, 
// ou seja funciona porém  é preciso melhorar o desempenho  

// codigo melhorado abaixo 
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// adicionar botão de escuta
frm.addEventListener("submit", (e) => {
    e.preventDefault(); //vai evitar envio do formulario 
    // Pega o valor que o usuário digitou no campo "numero"
// Number() transforma o valor recebido (que vem como texto) em número.
const num = Number(frm.numero.value);
// Cria uma variável para descobrir se o número possui algum divisor.
// Começamos com 0, significando: "ainda não encontrei divisor".
let temDivisor = 0;

// Cria um contador chamado "i" começando em 2.
// Enquanto i for menor que "num", o loop continua.
// i++ significa aumentar i em 1 a cada repetição.
//
// Começamos em 2 porque todo número é divisível por 1.
// Para descobrir se é primo, precisamos procurar outros divisores.
for(let i = 2; i < num; i++){
    // % (módulo) mostra o RESTO da divisão.
    // Exemplo:
    // 10 % 2 = 0 → 10 é divisível por 2
    // 10 % 3 = 1 → 10 NÃO é divisível por 3
    
    // Então, se o resto for 0, encontramos um divisor.
    if(num % i == 0){

        // Encontramos um número que divide "num" exatamente.
        // Colocamos 1 para indicar:
        // "SIM, esse número possui um divisor".
        temDivisor = 1;

        // Para o loop imediatamente.
        // Não precisamos continuar procurando porque
        // já descobrimos que o número não é primo.
        break;
    }
}

// Verifica duas condições:
//
// 1. num > 1
//    → números primos precisam ser maiores que 1.
//
// 2. !temDivisor
//    → ! significa "NÃO".
//    → Se temDivisor é 0, !temDivisor será true.
//
// Portanto:
// num > 1 E não encontramos nenhum divisor
// = número primo.
if(num > 1 && !temDivisor){

    // Mostra na página que o número é primo.
    // ${num} coloca o número digitado dentro do texto.
    resp.innerText = `${num} é primo`;
}else{

    // Se as condições acima não forem verdadeiras,
    // significa que o número não é primo.
    resp.innerText = `${num} não é primo`;
}
})

// com esse ajuste ocorre uma boa economia de processamento 