/** regras para o ano bissexto
 * de 4 a 4 anos é a ano bissexto
 * de 100 a 100 anos não é ano bissexto
 * de 400 a 400 anos é ano bissexto 
 */

 function AnoBissexto (ano) {
    // const data = ano
    const Resto = ano % 4
    const Resto1 = ano % 100
    const Resto2 = ano % 400
    Resto1 == 0

    if (Resto == 0 && Resto1 == false) {
        return `
        true
        Ano: ${ano}
        `
    } else if (Resto2 == 0){
        return `
        true
        Ano: ${ano}
        `
    } else {
        return `
        false
        Ano: ${ano}
        `
    }
 }

 console.log(AnoBissexto(2024))
 console.log(AnoBissexto(2004))
 console.log(AnoBissexto(2020))
 console.log(AnoBissexto(2400))

