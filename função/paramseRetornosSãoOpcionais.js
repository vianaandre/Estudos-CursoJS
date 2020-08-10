function area(Altura, Largura) {
    const area = Altura * Largura 
    if (area > 20){
        console.log(`Valor invalido ${area}`)
    }else {
        return area
    }
}
console.log(area(2, 5))
console.log(area(5, 8))
console.log(area(1, 5, 6, 7 ,3))
console.log(area(9))