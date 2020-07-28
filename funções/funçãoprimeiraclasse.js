// Função em js é First-class Object (citizens)
// Higher-order functions

// crir de forma literal 
function fun1 () { }

// armazenar em uma variável
const fun2 = function () { }

// armazenar em uma array 
const array = [function (a, b){return a + b}, fun1, fun2]
console.log(array[0](2, 6))

// armazenar em um objeto
const obj = {}
obj.name = function () {return "Opá"}
console.log(obj.name())

// passar uma função parametro 
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Uma função retorna/conter um função 
function soma (a, b) {
    return function (c){
        console.log(a + b + c)
    }

}
soma(2, 8)(4)
