const atores = ['Jhony', 'Miguel', 'Tory', 'Scott']

console.log(atores)
atores.pop() // retira o elemento da ultima posição 
console.log(atores)

atores.push('Capitão Patria') // adiciona a partir da ultima posição
console.log(atores)

atores.shift() // remove o elemeto da primeira posição 
console.log(atores)

atores.unshift('Larusso', 'Cobra kai') // adiciona partindo da primeira posição 
console.log(atores)

atores.splice(4, 1, 'Luz Estrela') // retira um elemento partindo do indice 4 e adiciona um novo elemento
console.log(atores)

const atoresNovos = atores.slice(2) // cria um novo array partindo do elemento 2 de atores
console.log(atoresNovos)

const atoresNovos2 = atores.slice(1, 4) // partindo da posição 1 indo até a três 
console.log(atoresNovos2)



