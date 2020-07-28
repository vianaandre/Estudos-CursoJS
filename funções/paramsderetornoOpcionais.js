function area (largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Area maior que o permitido = ${area}m2`)
    }else{
        console.log(area)
    }
}

area(10, 5)
area(10)
area()
area(10, 1, 4, 65, 6)
 /* por ser uma linguagem de tipagem fraca, ela acaba dando uma flexibilidade maior, dando
 uma possibilidade maior na hora de passar os valores dos parametros de uma função 
*/