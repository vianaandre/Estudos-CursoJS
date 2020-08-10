//estrategia 01 (falha por causa do 0)
function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return `Soma = ${(a)+(b)+(c)}`
}
console.log(soma(0))

//estrategia 02, 03, 04 
function mais(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(mais(2), mais(2, 5, 3), mais(), mais(0, 0, 0))

//padrão do es2015
function mult(a=1, b=1, c=1){
    return "Multiplicação: " + a * b * c
}
console.log(mult(0, 8, 6))