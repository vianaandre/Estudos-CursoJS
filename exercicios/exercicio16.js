const calculadoraBasica = function (num1, num2, operador) {
    switch(operador) {
        case '+':
            const operando1 = num1 + num2
            return `${num1} ${operador} ${num2} = ${operando1}`
        break

        case '-':
            const operando2 = num1 - num2
            return `${num1} ${operador} ${num2} = ${operando2}`
        break

        case '*':
            const operando3 = num1 * num2
            return `${num1} ${operador} ${num2} = ${operando3}`
        break

        case '/':
            const operando4 = num1 / num2
            return `${num1} ${operador} ${num2} = ${operando4}`
        break

        default: 
            return `Operação Invalida`
        break
}
}

console.log(calculadoraBasica(5, 2, '-'))
console.log(calculadoraBasica(2, 6, '+'))
console.log(calculadoraBasica(5, 10, '*'))
console.log(calculadoraBasica(50, 10, '/'))
