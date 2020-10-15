// criar um função que verefica se um numero passado como parametro é divisil por 3 

function Multiplos (param) {
    const Resto = param % 3

    if (Resto == 0) {
        return true
    }else {
        return false
    }
}

console.log(Multiplos(9))
console.log(Multiplos(8))
console.log(Multiplos(133))

