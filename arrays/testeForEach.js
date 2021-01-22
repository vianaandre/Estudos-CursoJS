const numeros = [2, 1, 7, 4, 8, 10, 12, 45, 34, 12]

const par = numeros.forEach((num) => {
    const novoaNum = []

    if(num > 10) {
        novoaNum.push(num)
    }else if (num < 10) {
        delete num
    }

    console.log(novoaNum)
})

console.log(numeros)