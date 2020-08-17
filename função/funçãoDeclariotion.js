console.log(soma(4, 6)) // em function declaration, a função já está implementada no escopo todo 
//function declaration
function soma (x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(5, 4)) // ja nesses meios de declarações a função não esta declarada no começo do escopo


//named function expression
const mult = function (x, y) {
    return x * y
}
console.log(mult(5, 4))

