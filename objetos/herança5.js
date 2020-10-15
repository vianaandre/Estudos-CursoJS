console.log(typeof Object)
console.log(typeof String) // todos são function 
console.log(typeof Array)

String.prototype.reverse = function () { // função reverse reverte um string 
    return this.split('').reverse()//.join('') essa função junta tudo denovo 
}
console.log('Escola Coder'.reverse())

Array.prototype.first = function () {
    return this[3]
}
console.log([1, 4, 5, 6].first())  //first pega o primeiro elemento de uma string 
 
String.prototype.toString = function () {
    return 'Não faça isso'
}

console.log('Escola coder'.reverse()) // não sobrescreva uma função que já é padrão do js

