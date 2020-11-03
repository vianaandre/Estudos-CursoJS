const http = require('http')
const { url } = require('inspector')
const { reject } = require('lodash')
const { resolve } = require('path')

const getNomes = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultados = ''

            res.on('data', dados => {
                resultados += dados 
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultados))
                }
                catch(e) {
                    reject(e)
                }
            })
        }) 
    })
} 

// imprimindo os nomes 
Promise.all([getNomes('A'), getNomes('B'), getNomes('C')])
   .then(turmas => [].concat(...turmas))
   .then(alunos => alunos.map(aluno => aluno.nome))
   .then(nomes => console.log(nomes))
   .catch(e => console.log(e.menssage))

getNomes('D').catch(e => console.log(e.menssage))

// imprimindo os ids 
Promise.all([getNomes('A'), getNomes('B'), getNomes('C')])
   .then(turmas => [].concat(...turmas))
   .then(identificadores => identificadores.map(ids => ids.id))
   .then(ImprimindoIds => console.log(ImprimindoIds))