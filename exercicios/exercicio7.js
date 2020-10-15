//função que retorna três e faz a formula de bhaskara

/*
 * criar uma função 
 * Nomea os parametros 
 * criar um array vazio 
 * criar duas lets com uma parte da formula de basckara 
 * trata essas partes para vereficar se não vão estar negatiavas 
 * cria x1 e x2 com o resto da formula 
 * passa para os arrays esses x1 e x2
 * reurna o resultado
 */
//delta = -b +- (Math.sqrt(b*b-(4*a*b))/(2*a)

function baskara (ax2, bx, c) {
    let resultado = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        console.log('Delta negativo')
    }
    let x1 = -(bx) + (Math.sqrt(delta))
    let x2 = -(bx) - (Math.sqrt(delta))
    resultado.push(x1)
    resultado.push(x2)
    
    return resultado
}

console.log(baskara(3, -5, 12))












//  if (this.positivo <= 0) {
//      console.log(`Positivo: ${this.positivo}`)
//  }
//  else if (this.negativo <= 0) {
//      console.log(`Negativo: ${this.negativo}`)
//  }
//  else if (this.positivo == NaN) {
//      console.log('Delta negativo')
//  }
//  else if (this.negativo == NaN) {
//      console.log('Delta negativo')
