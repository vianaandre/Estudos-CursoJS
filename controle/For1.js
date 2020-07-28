let contador = 1 // declraração 
while (contador <= 10) { // condição 
    console.log(`contador ${contador}`) 
    contador++ // incremento 
}

for (let v = 1; v <= 10; v++) { //declararção - condição - incremento 
    console.log(`v = ${v}`)
}

const notas = [1.3, 6.7, 6.7]
for(i = 0; i < notas.length; i++) { /* o i = 0 quer dizer que começa por o indice
0 do array e nota.length mostra que deve se ir até o ultimo indice do array declarado e parar*/
    console.log(`nota: ${notas[i]}`) 
}

/* enquanto no while voce deve declarar fora da estrutura uma variável, 
no for voce declara entre os parentes 
*/