function real(partes, ...valores) {
    // nesse caso foi pego as partes e valores e foi concatenado transformando em real 
    const resultado =[]
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    console.log(resultado.length)
    return resultado.join('')
}

const preço = 33.99
const preçoParcelado = 11
console.log(real `1x de ${preço} ou 3x de ${preçoParcelado}`)

function tag (partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    console.log(resultado.length)
    return resultado.join('')
}

const produto = 'Notebook'
const preco = 3999
console.log(tag `O ${produto} custa ${preco}`)