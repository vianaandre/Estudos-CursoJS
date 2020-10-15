const { valor } = require("../node/instanciaÚnica")

// arrow function
const somar = (a, b) => a + b
console.log(somar(3, 4))

// this === exeports
const testeThis = () => console.log(this === exports)
testeThis()

// testando o Bind
const objeto = {
    valorx: 'Bom dia',
    falar: function () {
        return this.valorx
    }
}

const recebendo = objeto.falar
console.log(recebendo())

const recebendoComBIND = recebendo.bind(objeto)
console.log(recebendoComBIND())

// parametros padrões
function log(num = 12){
    console.log(num)
}

log() // retorno padrão
log(17) // retorno especifico

// rest ou spred, dependendo do contexto
function rest(...numeros)  {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(rest(12, 4, 1, 4))

function testeRest(...valores) {
    return valores 
}
console.log(testeRest(1, 2, 4, 5, 5))


// fazendo o teste
const teste = () => console.log(`${this.nome} - ${this.idade} - ${this.anos}`)

this.nome = 'André'
this.idade = 18 
this.anos = new Date()
teste()
