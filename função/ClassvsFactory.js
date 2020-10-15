class pessoa { //sintaxe de class, nela a obrigação de usar this para poder declarar fora do escopo da class
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const chamar = new pessoa('André')
chamar.falar()

const CriaPessoa = nome => {
    return {
        falar: () => {
            console.log(`Meu nome é ${nome}`)
        }
    }
}
const Chamarpessoa = CriaPessoa('André')
Chamarpessoa.falar()