// função sem retorno 
/* funçao é o bloco de código nomeado, que contém sentenças de códigos, onde se tem a chamada 
, as constantes declradas, as ações que as constantes iram exercer, e depois eu chamo essas 
constantes e acrescento um valor*/
function imprimiSoma(a=0, b=0) {
    console.log(a + b)
}

imprimiSoma(2, 3)//atribui aos valores de function imprimiSoma
imprimiSoma(2)//NaN
imprimiSoma(2, 5, 4, 5, 6, 7)//pega só os dois primeiros 
imprimiSoma()

// função com retorno 
function soma(a, b = 1){ //b = valor, atribuiu uma valor a b 
    return a + b //para retuno de uma função  
}

console.log('A soma é: ' + soma(2, 3))//usado para retorno de uma função 
console.log(soma(2))//atribui ao valor a 
console.log(soma())//NaN

function teste(r, e) {
    return r - e 
}
console.log(teste(3, 6))

function teste1(n1, n2) {
    console.log(n1 * n2)
}
teste1(3, 3)
