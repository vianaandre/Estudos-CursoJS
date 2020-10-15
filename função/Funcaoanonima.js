const soma = function (x, y) {
    return x + y
}

//Arrow function
const Somateste = (a, b, operação = soma) => { console.log(`${a} + ${b}: ${operação(a, b)}`)} 
// nesse contexto forem  criados functions dentro de valores de parametros  
Somateste(5, 2, function(x, y) {
    return x + y
})
Somateste(3, 5,  (x, y) =>  x * y)
Somateste(4, 1, (x, y) => x - y)


const teste = function (a, b) {
    return a * b
}
const testecal = (e, r, open) => console.log(`${e} + ${r} = ${open(e, r)}`)
testecal(3, 5, function(e, r) {
    return e * r
})