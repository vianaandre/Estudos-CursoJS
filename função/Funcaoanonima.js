const soma = function (x, y) {
    return x + y
}

//Arrow function
const Somateste = (a, b, operação = soma) => { console.log(`Operação: ${operação(a, b)}`)} 
// nesse contexto forem  criados functions dentro de valores de parametros  
Somateste(5, 2, function(x, y) {
    return x + y
})
Somateste(3, 5,  (x, y) =>  x * y)
Somateste(4, 1, (x, y) => x - y)