let a = 3
this.b = 32
global.c = 123
this.f = 'André'
this.g = 34
this.r = true

console.log(a)
console.log(global.c)
console.log(this.b)
console.log(module.exports === this)
console.log(module.exports)// se comporta como se fosse um objeto, ou seja pega todas as variáveis criadas com this 
//module.exports = { e: 55, t: false, g: 'teste'} (maneira mais usada)

abc = 12 // isso torna a variável global, ou seja, declare sua variável com let ou var
console.log(global.abc)



this.lindo = 'lindo'
this.nome = 'André'
this.idade = 10 
this.dat = Date


console.log(module.exports)


