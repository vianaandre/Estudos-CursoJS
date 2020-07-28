/*function rand([ min = 20, max = 50]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + (min)// sempre retorna o valor max * random 
    return Math.ceil (valor)
}

console.log(rand([20, 60]));//valores atribuidos a max e min atreves de posições 
console.log(rand ([300]));//Atribuiu apenas a o valor min 
console.log(rand([, 21]));//Atribuiu apenas a o valor max por causa da , 
console.log(rand([]));//pegou os valores padrões atribuidos já la em cima 
console.log(rand());// da erro*/

function rand([min = 20, max = 80]) {
    if (min < max) [min, max] = [100, 500]
    const valor = Math.random() * (max - min) + (min)
    return Math.floor (valor)
}

console.log(rand([20, 50]))
