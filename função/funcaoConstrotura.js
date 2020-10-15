function carro (velocidadeMaxima = 200, delta = 5) {
    //atributo privado da função 
    let velocidadeAtual = 0 

    //atributo global 
    this.velocidade = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    
    //atributo global 
    this.getvelocidadeAtual = function (){
        return velocidadeAtual
    }
}

//quanto mais uno.velocidade eu der mais acelerado o carro vai ficar
const uno = new carro()
uno.velocidade()
uno.velocidade()
uno.velocidade()
uno.velocidade()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro (350, 20)
ferrari.velocidade()
ferrari.velocidade()
ferrari.velocidade()
ferrari.velocidade()
console.log(ferrari.getvelocidadeAtual())