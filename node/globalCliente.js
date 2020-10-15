require('./global')

console.log(Meuapp.ola())
console.log(Meuapp.respostas())
console.log(Meuapp.nome)

// com o freeze eu não tenho a possibilidade de mudar o valor do atributos 
Meuapp.nome = 'Gustavo'
console.log(Meuapp.nome)





