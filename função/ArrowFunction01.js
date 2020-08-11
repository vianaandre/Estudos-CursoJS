let num2 = function (a) {
    return 2 * a
}

num2 = (a) => {
    return 2 * a
}

num2 = a => 2 * a // returno implicito, ou seja, retorno com apenas uma funcionalidade 

console.log(num2(Math.PI))

let letras = function () {
    return "Olá"
}

letras = () => "Olá"
letras = _ => "Olá" // possui um parametro 

console.log(letras())
