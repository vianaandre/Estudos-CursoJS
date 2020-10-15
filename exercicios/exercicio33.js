// unir vetores de inteiros, strings, decimais 
const vetorInteiros = [1, 2, 3, 4]
const vetorStrings = ['Um', 'Dois', 'Três', 'Quatro']
const vetorDouble = [1.4, 5.1, 3.8, 2.4]

// maneira de concatenar arrays com concat 
const array = vetorInteiros.concat(vetorStrings)
const array1 = array.concat(vetorDouble)
console.log(vetorInteiros, vetorStrings, vetorDouble, array1)

// maneira de concatenar arrays com +
console.log(vetorInteiros + " " + vetorStrings +  "" + vetorDouble)

