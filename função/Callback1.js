const marcas = ["Nike", "Adidas", "Puma", "Vans"]

function lista (nome, indice) { //primeiro pega o elemento nome e depois o indice
    console.log(`${indice + 1}. ${nome}`)
}

marcas.forEach(lista)//chama a função para cada elemento da array



