// escreva duas funções 
// 1 função para progressão aritmetrica 
// 2 função para progressão geometrica 
// elas devem receber 3 parametros 
// 1 n = numeros de termos - 2 a1 = primeiro termo - 3 r = razão 

// criar uma constante para a soma dos elementos 
// retorna a soma desses elementos e os termos 

// progressão aritmática 
function aritmética (n, a1, r) {
    const formula = a1 + ((n-1)*r)

    console.log(`
    Soma dos elementos: ${formula}
    N de termos: ${n}
    `) 
}

aritmética(12, 5, 3)

// progressão geometrica
function geometrica (n, a1, r) {
    const formula = a1 * (r**(n-1))

    console.log(`
    Soma dos elementos: ${formula}
    N de elementos: ${n}
    `)
}

geometrica(5, 10, 2)
