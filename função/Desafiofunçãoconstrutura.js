function NomePessoa (nome) {
    this.nome = nome

    this.NomeDaPessoa = function () {
        console.log(`Meu nome é ${this.nome}`)
    }

}

const ChamarNome = new NomePessoa('Sandra')
ChamarNome.NomeDaPessoa()