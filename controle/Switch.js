 const teste = function (nota=0) {
     switch (Math.ceil(nota)){
        case 10: case 9: 
            console.log('Quadro de Honra')
        break
        case 8: case 7:
            console.log('Aprovado')
        break
        case 6: case 5: case 4:
            console.log('Recuperação')
        break
        case 3: case 2: case 1: case 0: 
            console.log('Reprovado')
        break
        default:
            console.log('Nota Invalida')
        break
     }
     console.log('Atenciosamente secretaria!!!')
 }

teste()
teste(10)
teste(4)