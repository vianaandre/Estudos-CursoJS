function rand({ min = 0, max = 100 }) { // rand é a sintaxe que chama a destructuring
    const valor = Math.random() * (max - min) + min // Math.random faz com que os valores ficam sendo mostrados aleatoriamente usando a atribuição de max e min
    return Math.floor(valor) // Arrendonda para baixo
}

const obj = { max: 50, min: 40 } // peguei os atributos de max e min que foram declarados la em cima e coloquei novos valores 
console.log(rand(obj));//imprime com o random para funcionar o min e max (deve conter o rand, porque ele é responsavel por chamar a destrucuturing)
console.log(rand({ min: 955}));// atribui um novo valor de min 

// nesse caso foi usado um atribuição de função e dentro foi atribuido um objeto