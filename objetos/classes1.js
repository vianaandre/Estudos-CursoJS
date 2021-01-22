
class pessoa  {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    monstrando () {
        return `${this.nome} ${this.sobrenome}`
    }
}
const teste = new pessoa('André', 'Viana')
console.log(teste.monstrando())

// class é uma maneira de usar a função diferente, ou seja, uma sintaxe diferente de função 
