// criando um objeto prototype e fazendo as ligações atraves do __proto__
const vô = {
    loja: 'Renault'
}
const pai = {
    __proto__: vô,
    modelo: 'f40',
    velmax: 340,
    velmin: 20
}
const filho = {
    __proto__: pai,
    modelo: 'g40',
    velmax: 200
}
console.log(pai.loja)
console.log(filho.velmin, filho.loja)

const carropai = {
    velAtual: 0,
    velMax: 300,

    acelerarMais (delta) {
        if (this.velAtual <= this.velMax) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    atual() {
        return `${this.velAtual}K/hr de ${this.velMax}k/hr`
    }
}

const ferrari = {
    modelo: 'f30',
    velMax: 400
}
const volvo = {
    modelo: 'g50',
    status() {
        return `${this.modelo}: ${super.atual()}`
    }
}

Object.setPrototypeOf(ferrari, carropai) // exepecificando o pai de outra forma
Object.setPrototypeOf(volvo, carropai)

console.log(ferrari)
console.log(volvo)

ferrari.acelerarMais(100)
ferrari.acelerarMais(100)
ferrari.acelerarMais(20)
console.log(ferrari.atual())
volvo.acelerarMais(100)
volvo.acelerarMais(100)
console.log(volvo.status())




