//forma literal 
function soma() { }

//dentro de uma variável 
const ler = function (escrita){
    return escrita
}
console.log(ler("lindo"))

//função dentro de um array 
const array = [ function (a) { return a }, function (b) {return b * 2} ] 
console.log(array[0]("Opa"))
console.log(array[1](Math.PI))

//função dentro de um objeto 
const obj = {}
obj.falar = function () { return "Executando..."}
console.log(obj.falar())

//função como parametro para outra função
function letra(fun) {
    fun()
}
letra(function () {console.log(1 + 3)})

//função pode retornar um conter uma função 
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}
soma(1, 5)(3)