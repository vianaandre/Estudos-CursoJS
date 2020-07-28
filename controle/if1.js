function time(vitorias) {
    if(vitorias >= 5) {  //if: verdadeiro - (): condição 
        console.log('Time escolido teve ' + vitorias + ' vitorias')
    }
}
time(6)
time(3)
time(8)

function time1(nome) {
    if (nome) {
        console.log('É verdade... ' + nome)
    }
}
time1(null)
time1(undefined)
time1('')
time1()
time1(0)
time1(" ")
time1('André')

function time3(tecnico) {
    if (!tecnico) {  // acaba que transformando tudo que é falso para verdadeiro 
        console.log('O tecnico é mentiroso ' + tecnico)
    }
} 

time3(0)
time3(null)
