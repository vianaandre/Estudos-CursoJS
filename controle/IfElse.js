const media = media => {
    if (media >= 7){
        console.log('Aprovado!!!')
    }
    else { // coloque sempre as expressões em blocos separados para uma maior organização 
        const up = texto => texto.toUpperCase()
        console.log(`${up('reprovado!!!')}`)
    }
}

media(7)//Aprovado 
media(5)//Reprovado
media('epa')// cuidado !!!, com string no lugar errado 