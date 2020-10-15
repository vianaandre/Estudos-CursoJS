let num2 = function (a) {
    return this === a
}

num2 = (a) => {
    return this === a
}

num2 = a => this === a // returno implicito, ou seja, retorno com apenas uma funcionalidade 

console.log(num2(Math.PI))

let letras = function () {
    return "Olá"
}

letras = () => "Olá"
letras = _ => "Olá" // possui um parametro 

console.log(letras())
