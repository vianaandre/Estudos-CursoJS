console.log(typeof Object)//internamente é uma função 
console.log(typeof new Object)

const cliente = function() {}
console.log(typeof cliente)
console.log(typeof new cliente)

class Produto {} //internamente é uma função, oque muda é a sintaxe
console.log(typeof Produto)
console.log(typeof new Produto)

//a partir de uma função voce cria um objetos, ou seja, voce cria uma instancia que transforma uma função em um objeto