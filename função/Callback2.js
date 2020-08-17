const notas = [1.6, 8.9, 3.8, 9, 10, 5.7]

//usando sem o Callback 
const NotasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        NotasBaixas.push(notas[i])
    }
}
console.log(NotasBaixas)

//usando com o Callback 1
const NotasBaixas1 = notas.filter(function (nota){ //filter: ele filtrar elementos dentro de um array
    return nota < 7
})
console.log(NotasBaixas1)

//usando Callback 2
const NotasBaixas2 = notas.filter(nota1 => nota1 < 7)
console.log(NotasBaixas2)

//usando Callback 3
const NotasMenor7 = nota => nota < 7
const NotasBaixas3 = notas.filter(NotasMenor7)
console.log(NotasBaixas3)

