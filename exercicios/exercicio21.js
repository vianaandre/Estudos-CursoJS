// criar um prgrama que identifica o valor do plano de saúde de uma pessoa 
/**
 * crianças com menos de 10 anos pagam 80 
 * conveniados com idade entre 10 e 30 pagam 50
 * conveniados com idade acima de 30 e até 60 pagam 95
 * conveniados acima de 60 anos pagam 130 
*/

function valorPlanodeSaude (idade) {
    if (idade < 10) {
        const Valor = 100 + 80
        console.log(`Valor pelo plano de Saude: ${Valor}`)
    }
    else if (idade >= 10 && idade <= 30) {
        const Valor = 100 + 50
        console.log(`Valor pelo plano de Saude: ${Valor}`)
    }
    else if (idade > 30 && idade <= 60) {
        const Valor = 100 + 65
        console.log(Valor)
    }
    else if (idade > 60) {
        const Valor = 100 + 130
        console.log(`Valor pelo plano de Saude: ${Valor}`)
    }
}

valorPlanodeSaude(9)
