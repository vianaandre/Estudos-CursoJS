const anonimo = process.argv.indexOf('-a') !== -1 
console.log(anonimo)

if(anonimo) {
    // evento de output - saida 
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
}else {
    process.stdout.write('Fale seu nome: ')
    // evento de imput - entrada 
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    })
}