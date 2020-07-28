let a = 3
let b = 4

a++ // forma pos fixada 
console.log(a)
--a // nessa forma ele é executado com prioridade, na forma pré fixada 
console.log(a)

++a
console.log(a === b)
b--                 // forma mais simples de se ler um código 
console.log(a === b)

/*
* forma mais complicada de se ler o código
console.log(++a === b--)// nesse contexto o (a) foi executado antes da comparação e o b-- foi depois da comparação 
console.log(a === b)
*/

/* nesse contexto, o javascript sempre funciona com operação de prioridades e por isso que o 
a e b foram tidos como iguais na comparação usando o ++ e --*/