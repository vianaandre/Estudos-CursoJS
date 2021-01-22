const pessoa = {
    saudação: 'Bom dia', 
    falar() {
        console.log(this.saudação)
    }
}

pessoa.falar()
const testePessoa = pessoa.falar
testePessoa()// conflito de paradigmas OO e funcional 

const UsandoBind = pessoa.falar.bind(pessoa) //bind traz componentes dentro de um escopo para fora 
UsandoBind()

const objetoTeste = {
    nome: 'andré',
    chamar () {
        console.log(this.nome)  
    }
}

const utilizandoBind = objetoTeste.chamar.bind(objetoTeste)
utilizandoBind()



