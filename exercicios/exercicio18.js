// função que dispara numeros entre um intervalo de 0 e 10 

function Intervalo (min = 0, max = 10) {
    const numero = Math.random() * (max - min) + min
    switch(Math.ceil(numero)) {
        case 0:
            return `zero`
        break

        case 1:
            return `um`
        break

        case 2:
            return `dois`
        break

        case 3:
            return `três`
        break

        case 4:
            return `quatro`
        break

        case 5:
            return `cinco`
        break

        case 6:
            return `seis`
        break
        
        case 7:
            return `sete`
        break

        case 8:
            return `oito`
        break

        case 9:
            return `nove`
        break

        case 10:
            return `dez`
        break

        default:
            return `Numero fora do intervalo`
        break
    }
}
console.log(Intervalo())
console.log(Intervalo())
console.log(Intervalo())
console.log(Intervalo())
console.log(Intervalo())
console.log(Intervalo())
console.log(Intervalo())
