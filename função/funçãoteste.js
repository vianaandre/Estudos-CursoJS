// function funcionarios (nome, end, idade) {
//     console.log(`
//     Nome: ${nome}
//     Endereço: ${end}
//     Idade: ${idade}
//     `)
// }

// const obj1 = new funcionarios('André', 'Rua 7 de Setemnro', 22)
// const obj2 = new funcionarios('Leandro', 'Rua Carvalho', 34)
// const obj3 = new funcionarios('Maycon', 'Médio Rio Branco', 27)

// class somar {
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }
//     present = () => {
//         console.log(this.a + this.b)
//     }
// }
// let a = new somar(2, 4)
// a.present()


const objeto = {
    nome: "André", 
    idade: 35, 
    identi: 1223
}

class teste {
    constructor() {
        this.objeto = objeto 
    }
    // verficação de Nome 
    vereficaçãoNome = () => {
        if(this.objeto.nome === String) {
            console.log(`${this.objeto.nome}`)
        }else {
            console.error('Nome não identificado')
        }
    }
    // Vereficação de Idade 
    vereficaçãoidade = () => {
        if(this.objeto.idade === Number) {
            if(this.objeto.idade > 10) {
                vereficarPlano()
            }else {
                console.log('Fora da idada')
            }
        }else {
            console.error('Idade não identificado')
        }
    }
    // Vereficação de identificação 
    vereficaçãoIdenti = () => {
        if(this.objeto.identi === Number) {
            console.log(funcIdentificação())
        }else {
            console.error('Identificação não identificada')
        }
    }
}

let recebe = new teste()
recebe.vereficaçãoNome()
recebe.vereficaçãoidade()
recebe.vereficaçãoIdenti()


