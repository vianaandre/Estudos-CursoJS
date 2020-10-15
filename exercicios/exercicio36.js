// criar duas funçõs, que são passadas dois parametros
// um com um valor inteiro 
// outro com um vetor com valores numericos 
// a primeira função irá pegar e multiplicar o valor inteiro com os numeros dentro do vetor
// a segunda função irá pegar o valor inteiro e vai multiplicar pelo numeros que estão acima de 5 do vetorNumerico 


function multi (Inteiro, vetorNumericos) {
    const recebe = []
    for(let i = 0; i<vetorNumericos.length; i++){
        const multiplica = Inteiro * vetorNumericos[i]
        recebe.push(multiplica)
    }
    return recebe
}

vetorNumericos = [1, 7, 12, 5, 12, 8, 10]
console.log(multi(2, vetorNumericos))

function multi2 (inteiro, vetorNumerico) {
    const recebe = []
    for(let i = 0; i<vetorNumerico.length; i++) {
        if(vetorNumerico[i] > 5) {
            const multiplica = inteiro * vetorNumerico[i]
            recebe.push(multiplica)
        }
    }
    return recebe
}

vetorNumerico = [10, 3, 5, 1, 2, 6, 7, 5, 8]
console.log(multi2(3, vetorNumerico))
