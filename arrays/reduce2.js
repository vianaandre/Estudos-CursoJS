const alunos = [
    { nome: 'Henrique', nota: 9.8, bolsista: true }, 
    { nome: 'Marcos', nota: 4.7, bolsista: false}, 
    { nome: 'Bruna', nota: 8.9, bolsista: true}, 
    { nome: 'André', nota: 7.6, bolsista: false}
]

// Todos os alunos são bolsista? 
const todos = (resulta, bolsista) => resulta && bolsista
console.log(alunos.map(e => e.bolsista).reduce(todos))

// Algum aluno é Bolsista? 
const alguns = (resulta, bolsista) => resulta || bolsista
console.log(alunos.map(e => e.bolsista).reduce(alguns))




