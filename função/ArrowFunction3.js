/*o this vai estar atrelado para anos e não para function arrow, isso porque a forma como o this foi escrito 
atrela ela a o escopo global, definindo ele de forma mais segura*/

function anos () {
    this.idade = 0


    setInterval(() => { 
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new anos 

// aponta para o contexto global e não o da variável 
function teste (a) {
    console.log(this === a)
}
teste(global)

// aponta para o contexto da variável 
const teste1 = b => console.log(this === b)
teste1(global)
