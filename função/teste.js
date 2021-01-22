function testeThis (a) {
    this.a = a
} 

const instancia = new testeThis(12)

console.log(instancia.a)

const fun = (b) => {
    this.b = b
}

console.log(this.b)
