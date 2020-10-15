const a = 'Idade'
const b = 18

const obj = { a:a, b:b} // forma antiga 
const obj1 = { a, b } // forma nova do ECMA script 2015
console.log(obj, obj1)

const obj3 = {
    [a]: b // forma nova do ECMA script 2015, onde voce pega e nomeia atributos com variáveis 
}
console.log(obj3)

const obj4 = {
    // forma antiga de se colocar uma function dentro de um objeto
    valor: function () {
        //...
    },
    // forma nova do ECMA script de se colocar um função dentro de um objeto 
    valor1() {
        //...
    }
}
console.log(obj4)

const a = Object.assign(obj, obj1)
console.log(obj1)


