// Função que gera numeros aleatorios sem repetição 

function gerandoNumero (max, min, valorProibido) {
    if (min > max) [min, max] = [max, min]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if(valorProibido.includes(aleatorio)){
            reject('Valor Repetido!!!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function valorMegaSena(qtdNumeros, tentativas) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerandoNumero(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        throw 'Valor Repetido Bocó!!!'
    }
   
}

valorMegaSena(10)
    .then(console.log)
    .catch(console.log)