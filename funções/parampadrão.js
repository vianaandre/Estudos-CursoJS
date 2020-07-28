// usando o || ("ou")
function teste (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log('teste: ' + teste())
console.log('teste: ' + teste(3))

// usando ternário (underfined, arguments, isNaN)
function teste2 (a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // o mais seguro 
    return a + b + c
}

console.log('teste2: ' + teste2(2))

// o mais usado e mais atualizado (ES2015)
function teste3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log('teste3: ' + teste3(3))