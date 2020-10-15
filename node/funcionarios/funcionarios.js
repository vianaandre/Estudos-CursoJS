const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // Tem a função de fazer requisições de algo que está remoto

// funções para filtrar e comparar
const pais = f => f.pais ==='China'
const mulheres = f => f.genero === 'F'
const salarioMenor = (fun, funAtual) => {
    return fun.salario > funAtual.salario ? fun : funAtual
}

// puxando os funcionarios com uma requisição
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)


    // mulher com menor salario que mora na china?
    const func = funcionarios.filter(pais).filter(mulheres).reduce(salarioMenor)
    console.log(func)

})




