const alunos = [
    { nome: 'Henrique', nota: 9.8, bolsista: true }, 
    { nome: 'Marcos', nota: 4.7, bolsista: false}, 
    { nome: 'Bruna', nota: 8.9, bolsista: true}, 
    { nome: 'André', nota: 7.6, bolsista: false}
]

const transformando = alunos.map(e => e.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual 
})

console.log(transformando)



