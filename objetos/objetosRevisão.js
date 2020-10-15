// coleção dinamica de chave e valor 

const Obj = new Object // instancia de função para objeto 
Obj.nome = 'André'
Obj.sobrenome = 'Viana'
Obj.idade = 18 
Obj['Estado Civil'] = 'Solteiro'

console.log(Obj)

const ComprarCarro = {
    modelo: 'Uno',
    valor: 22000,
    nome: 'Deive',
    Sobrenome: 'Dapper',
    Idade: 28,
    Endereço: {
        logadouro: 'Rua 7 de setembro',
        numero: 123
    }, 
    Vereficação: [
    {
        ['Estado civil']: 'Solteiro', 
        ['Nome do pai']: 'Leandro',
        ['Nome da mãe']: 'Bianca'
    }, 
    {
        CPF: '133.021.099.97',
        RG: '10.156.678-9',
        CNPJ: 'Não tem'
    }
    ],

    ['Valor do Seguro']: function() {
        //...
    }
}

// console.log(ComprarCarro)

delete ComprarCarro["Valor do Seguro"]
console.log(ComprarCarro.Vereficação)
// delete ComprarCarro.Vereficação
// console.log(ComprarCarro)



