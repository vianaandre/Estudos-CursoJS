Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const maioremenor =  function (valor) {
    if (valor.entre(1, 9.99)){
        console.log('Maior que 0 e menor que 10, ' + valor)
    }
    else if (valor.entre(10, 19.99)){
        console.log('Maior que 9 e menor que 20, ' + valor)
    }
    else if (valor.entre(20, 29.99)){
        console.log('Maior que que 19 e menor que 30. ' + valor)
    }
    else if (valor.entre(30, 39.99)){
        console.log('Maior que 29 e menor que 40, ' + valor)
    }
    else if (valor.entre(40, 49.99)){
        console.log('Maior que 39 e menor que 50, ' + valor)
    }
    else {
        console.log('Valor maior que 49, ' + valor)
    }
}

maioremenor(8)

// fazer um programinha que mostre o valor anterior e o seguinte de um valor 
function teste (valor=0) {
    console.log(--valor)
    console.log(++valor)
    console.log(++valor)
}
teste(10)







