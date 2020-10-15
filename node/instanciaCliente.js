const moduloA = require('./instanciaÚnica')
const moduloB = require('./instanciaÚnica')

const moduloC = require('./instanciaNova')()
const moduloD = require('./instanciaNova')() // chamando a funçao factory que contém como retorno um objeto 

// nesse contexto o cache funciona, porque foi importado um objeto 
moduloA.inc()
moduloA.inc()
console.log(moduloA.valor, moduloB.valor)

// já nesse não, porque foi importado um função factory, ou seja, uma função que contém um objeto 
moduloC.inc()
moduloC.inc()
console.log(moduloC.valor, moduloD.valor)
