function compras (trabalho1, trabalho2) {
    const comprarSorverte = trabalho1 || trabalho2 // ou 
    const comprarTv50 = trabalho1 && trabalho2 // e 
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // ou exclusivo ou xor 
    const manterSaudavel = !comprarSorverte // negação de comprar sorvete, operador unario

    return { comprarSorverte, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))// tomar sorvete e comprar televisão de 50 polegadas 
console.log(compras(true, false))// tomar sorvete e comprar televisão de 32 polegadas 
console.log(compras(false, true))// tomar sorvete e comprar televisão de 32 polegadas
console.log(compras(false, false))// manter se saudavel
