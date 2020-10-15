// forma literal 
const Obj1 = {}
console.log(Obj1)

// objeto em javascript 
console.log(typeof Object, typeof new Object)

// função construtura 
function Preçocomdesconto (nome, preço, desc) {
    this.nome = nome

    this.preçodoproduto = () => {
        return `
        ${nome}
        ${(preço) * (1 - desc)}
        
        `}
}

const Num1 = new Preçocomdesconto('Celular', 999, 0.09)
const Num2 = new Preçocomdesconto('Micro ondar', 599, 0.05)
console.log(Num1.preçodoproduto(), Num2.preçodoproduto())

function Funcionarios (nome, salariobase, Faltas) {
    return {
        nome, 
        salariobase, 
        Faltas, 
        preçoliquido(){
            const salarioLiquidototal = (salariobase / 30) * (30 - Faltas)
            return `${salarioLiquidototal.toFixed(2)}`
        }
    }
}

const Salario1 = Funcionarios ('João', 5000, 8)
const Salario2 = Funcionarios ('Leandro', 10000, 2)
console.log(Salario1.preçoliquido())
console.log(Salario2.preçoliquido())

// criando objeto com a função create
const pai = Object.create(null)
pai.nome = 'Gilberto' 
console.log(pai)

// json que retorna objeto 
const fromJson = JSON.parse('{"Info":"Lindo o André é"}')
console.log(fromJson.Info)


function teste (a, b) {
     this.soma = () => {
        return a + b
    }
 }

 const teste1 = new teste(2, 4)
 const teste2 = new teste(4, 8)
 console.log(teste1.soma(), teste2.soma())