// função que recebe como parametro:
// altura e taxa de crescimento anual de duas crianças 
/* veja se existe uma criaça com a altura menor, caso tenha, veja com quantos anos ele consiguira 
ultrapassar a maior */
// juros composto = s = p(1+i)**n

const criançao1 = function(altura, taxaCrescimento, nome) {
    this.alturaFora = altura
    this.taxaCrescimentoFora = taxaCrescimento
    this.nomeFora = nome
    console.log(`
    ${this.nomeFora}:
    Altura: ${this.alturaFora}cm
    Taxa de Crescimento: ${this.taxaCrescimentoFora}
    `
    )
}

criançao1(160, 0.5, "Felipe")

const criançao2 = function (altura, taxaCrescimento, nome) {
    this.alturaFora2 = altura
    this.taxaCrescimentoFora2 = taxaCrescimento
    this.nomeFora2 = nome
    console.log(`
    ${this.nomeFora2}:
    Altura: ${this.alturaFora2}cm
    Taxa de Crescimento: ${taxaCrescimentoFora2}
    `)
}

criançao2(100, 0.4, "Henrique")

function ComparandoAlturas () {
    if (this.alturaFora < this.alturaFora2) {
        const divide = this.alturaFora2 / this.alturaFora
        const anos = Math.pow(divide, 1.0 / (1 + this.taxaCrescimentoFora))
        console.log(Math.ceil(anos))
    }
    else if (this.alturaFora2 < this.alturaFora) {
        const divide = this.alturaFora / this.alturaFora2
        const anos = Math.pow(divide, 1.0 / (1 + this.taxaCrescimentoFora2))
        console.log(Math.ceil(anos))
    }
    else if (this.alturaFora == this.alturaFora2) {
        console.log(`Alturas iguais: ${this.alturaFora} = ${this.alturaFora2}`)
    }
}

ComparandoAlturas()
