// criar um controleador switch que retornar mensagens a partir da escolha do cliente 

const carro = 'lindo'
switch (carro) {
    case 'hatch':
        console.log (`Comprar efetuada com sucesso`)
    break

    case 'sedans', 'motocicletas', 'caminhonetes': 
        console.log (`Tem certeza que prefere este modelo?`)
    break

    default: 
        console.log (`Não trabalhamos com este modelo aqui`)
    break
}


