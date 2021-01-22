function Meuobjeto () {}
console.log(typeof Meuobjeto.prototype)

const obj1 = new Meuobjeto()
const obj2 = new Meuobjeto()
console.log(obj1.__proto__ === Meuobjeto.prototype)
console.log(obj2.__proto__ === Meuobjeto.prototype)


Meuobjeto.prototype.nome = 'André'
Meuobjeto.prototype.falar = function() {
    console.log(`O ${this.nome} é lindo!!!`)
}


obj1.falar()
obj1.nome = 'Antonio'
obj1.falar()

obj2.nome = 'Felipe'
console.log(obj2.nome)

const obj3 = {}
obj3.__proto__ = Meuobjeto.prototype
obj3.falar()
obj3.nome = 'Henrique'
obj3.falar = function () {
    console.log(`o ${this.nome} é feio`)
}

obj3.falar()

// resumindo tudo 
console.log((new Meuobjeto).__proto__ === Meuobjeto.prototype) // a instancia da função aponta para a função.prototype 
console.log(Meuobjeto.__proto__ === Function.prototype) // a função meu objeto aponta para a function.prototype
console.log(Function.prototype.__proto__ === Object.prototype) // function prototype aponta para o object prototype 
console.log(Object.prototype.__proto__ === null) // o object.prototype está nullo, ou seja, não tem para quem apontar 
