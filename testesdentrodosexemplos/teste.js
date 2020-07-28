function calc (a, b){
    const soma = a + b
    const subt = a - b 
    const div = a / b
    const mul = a * b
    const templete = `
    Soma: ${soma}
    Subtração ${subt}
    Multiplicação ${mul}
    Divisão ${div}
    `
    console.log(templete)
}
calc(2, 5)
  

