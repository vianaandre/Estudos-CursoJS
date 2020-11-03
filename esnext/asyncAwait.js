const http = require('http')
const { reject } = require('lodash')
const { resolve } = require('path')

const getTurmas = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultados = ''

            res.on('data', dados => {
                resultados += dados 
            })

            res.on('end', () => {// a aspas tem que ser assim ''
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

// recurso a partir do ES18 
// como simplificar promise async transformando elas em sync 
let obterAlunos = async () => {
    const ta = await getTurmas('A')
    const tb = await getTurmas('B')
    const tc = await getTurmas('C')
    return [].concat(ta, tb, tc)
}// ainda vai retornar um método async 

obterAlunos() 
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
