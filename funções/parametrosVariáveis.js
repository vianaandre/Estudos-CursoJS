function num () {
    let num = 2
    for (b in arguments){ // b representa os indices, e arguments representa o nome
        num *= arguments[b]
    }
    return num
}

console.log(num(2, 4, 6))
console.log(num(2, 3, "teste"))