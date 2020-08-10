function soma(){
    let soma = 0 
    for (i in arguments) {
        soma += arguments[i]
    }
    // return `${i}: ${soma}`
    return `${arguments[i]}: ${soma}`
}
console.log(soma(5, 5, 4, 2, 4, 5))
// console.log(soma("teste", 4, 5, "modo")) modo estranho de se usar
