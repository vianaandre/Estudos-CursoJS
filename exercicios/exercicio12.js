// algoritmo que calcula o fatorial de um numero 


const fatorial = function(numero) {
    if (numero == 0) {
        return 1
    }
    else {
        return numero * fatorial(numero - 1)
    }
}
console.log(fatorial(5))
