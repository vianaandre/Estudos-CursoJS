const alunos = [
    { nome: 'André', nota: 9.8}, 
    { nome: 'Leandro', nota: 7.8}, 
    { nome: 'Alison', nota: 6.8}
]

//Imperativo: explica detalhadamente oque deve ser feito 
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo: so diz oque deve ser feito e não dá passo a passo 
const getNotas = alunos => alunos.nota
const soma = (alunos, atual) => alunos + atual
const total2 = alunos.map(getNotas).reduce(soma)
console.log(total2 / alunos.length)

