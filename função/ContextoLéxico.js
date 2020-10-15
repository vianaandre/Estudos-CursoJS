const valor = 'contexto léxico'

function Minhafunção () {
    console.log(valor)
}

function Minhaoutrafunção () {
    const valor = 'Nãofuncionaporqueelasegueocontextoléxico'
    Minhafunção()
}
Minhaoutrafunção()

// vai respeitar o contexto em que a função foi declarada 