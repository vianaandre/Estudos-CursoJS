const nome = 'Rebeca'
const concatenação = 'Olá ' + nome + '!'//CONCATENAÇÃO
const templete = `
    Olá          
    ${nome}`//${} NECESSARIO NO TEMPLETE, VOCE PODE OU NÃO QUEBRAR LINHA 
console.log(concatenação)
console.log(templete)

//EXPRESSOES...
console.log(`${3 * 1}`)//COMO FAZER OPERAÇÕES COM TEMPLETES

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)//COMO OS TEMPLETES FUNCIONAM DIRETAMENTE DENTRO DE UM CONSOLE
