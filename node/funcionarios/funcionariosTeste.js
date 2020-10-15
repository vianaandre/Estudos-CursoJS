const url = 'https://registry.npmjs.org/'
const axios = require('axios')

// // fitrando os salarios  
//  const salarios = f => f.salario

// axios.get(url).then(response => {
//      const funcionarios = response.data
//      console.log(funcionarios)

//      const func = funcionarios.map(brasil)
//      console.log(func)
// })



axios(url).then(response => {
     const dados = response.data
     console.log(dados)
})


