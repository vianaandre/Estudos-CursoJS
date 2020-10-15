const _ = require ('lodash')

setInterval(() => console.log(_.random(1, 10)), 1000)


// lodash: foi instalado através do npm i e passado através do require 
// nodemon: instaldo através do npm i -g de forma global, usado para atualizar mudanças em tempo real de execução
