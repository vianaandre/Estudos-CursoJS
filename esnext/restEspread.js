// operador: rest(ajuntar)/spread(espalhar)
// rest como parametro de função

// spread em objeto
const usuarios = {nome: 'Maria', idade: 65}
const recebeSpread = {ativo: true, ...usuarios}
console.log(recebeSpread)

// spread em array
const grupoA = ['João', 'Pedro', 'Leandro']
const grupeTotal = ['Maria', ...grupoA, 'Pedro']
console.log(grupeTotal)
console.log(grupeTotal.length)
console.log(grupoA.length)