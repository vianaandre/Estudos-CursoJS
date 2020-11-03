function tag(partes, ...valores) {
    // partes pega strings dentro de um console com templete 
    // valores irá pegar os valores passados dentro do templete
    // eles irão retornar duas arrays 
    console.log(partes)
    console.log(valores)
    return partes, valores
}

const nome = 'Letícia'
const situacao = 'Aprovada'
console.log(tag `${nome} está ${situacao}`)


