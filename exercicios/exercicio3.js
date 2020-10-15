// Função que trabalha com exponenciação 
/*
 * Criar function * 
 * Criar parametros, usando parametros padões *
 * Fechar function * 
 * Passar return com função nove do ECMA script 2017 de exponenciação * 
 * Testar * 
 */

function exponenciação (base = 1, expoente = 1) {
    return base ** expoente //função nova do ECMA script 2017
    // return Math.pow(base, expoente)
}

console.log(exponenciação(200, 2))
console.log(exponenciação())//exemplo usando os parametros padrões 