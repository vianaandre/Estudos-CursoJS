// essa função cria um novo elemento e passa um className para ele 
function novoElemento (tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}
// essa função delimita as barreiras do cano dependo do retorno do parametro
function barreiras (reverse = false) {
    // instanciando o elemento 
    this.elemento = novoElemento('div', 'barreira')

    // criando constantes para serem usadas com valores dos elementos 
    const corpo = novoElemento('div', 'corpo')
    const borda = novoElemento('div', 'borda')
    // criando operadores ternarios para caso de reverse retorna true ou false 
    this.elemento.appendChild(reverse ? corpo : borda)
    this.elemento.appendChild(reverse ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

function parDeBarreiras (altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-barreira')

    // aqui é criado a barreira superior, que no caso, primeiro é criado a div do corpo e depois da borda 
    this.superior = new barreiras(true)
    // aqui  é criado a barreira inferior, que no caso, primeiro é criado a borda e depois o corpo 
    this.inferior = new barreiras(false)

    // é posto dentro do elemento criado na primeira linha a instancia das functions de barreiras e os elemento criados na function de barreiras 
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.DefinindoAltura = () => {
        // altura do cone de cima 
        const alturaSuperior = Math.random() * (altura - abertura)
        // altura do cone de baixo 
        const alturaInferior = altura - abertura - alturaSuperior
        // setando as alturas utilizando a função this que está dentro da function barreira
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    // pegando e transformando a posição do elemento barreira em number 
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    // setando um valor para a barreira 
    this.setX = x => this.elemento.style.left = `${x}px`
    // pegando a largura do elemento 
    this.getLargura = () => this.elemento.clientWidth
    
    this.DefinindoAltura()
    this.setX(x)
}
function Barreiras (altura, largura, abertura, espaço, notificandoPonto) {
    this.pares = [
        new parDeBarreiras(altura, abertura, largura),
        new parDeBarreiras(altura, abertura, largura + espaço),
        new parDeBarreiras(altura, abertura, largura + espaço * 2), 
        new parDeBarreiras(altura, abertura, largura + espaço * 3)
    ]
    // criando a const de declocamento que será usado para deslocar as barreiras 
    const deslocamento = 3
    // criando a function construtura de animação, que vai pegar e fazer um loop em cima das barreira, sempre que eles estiverem com o clientWidth negativo 
    this.animar = () => {
        // passando um forEach sobre os elementos 
        this.pares.forEach(par => {
            // setando o deslocamento
            par.setX(par.getX() - deslocamento)

            // caso a barreira chegue no  negativo do clientWidth, ele será adicionada logo apos a quarta barreira 
            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaço * this.pares.length)
                // sorteando de novo para que não seja sempre as mesmas barreiras 
                par.DefinindoAltura()
            }
            const meio = largura / 2
            const cruzouMeio = par.getX() + deslocamento >= meio
            && par.getX() < meio
            cruzouMeio && notificandoPonto()
        })
    }
}

function Passaro (alturaJogo, up, dowm) {
    // variável de controle 
    let voando = false

    // criando o novo elemento de img e setando a src dele 
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    // vendo a altura atual e setando a altura nova 
    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    // setando os eventos para a variável de controle 
    // evento de voar 
    window.onkeydown = e => voando = true
    // evento de soltar
    window.onkeyup = e => voando = false 
    
    this.animar = () => {
        // definindo a nova altura, onde pega e define com get 
        const novoY = this.getY() + (voando ? up : dowm)
        // definindo a altura maxima que ele pode ir 
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        // criando uma estrutura condicional para que caso o passaro passe da altura maxima ou da altura minima 
        if(novoY <= 0) {
            this.setY(0)
        }else if(novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        }else {
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo / 2)


}

// const b = new Barreiras(500, 1200, 200, 400)
// const p = new Passaro(500, 10, -6)
// const areaJogo = document.querySelector('[wm-flappy]')
// areaJogo.appendChild(p.elemento)
// b.pares.forEach(par => areaJogo.appendChild(par.elemento))
// setInterval(() => {
//      p.animar()
//      b.animar()
// }, 20)

// função definida para pontos 
function Progresso () {
    this.elemento = novoElemento('span', 'progresso')

    // criar a função que irá mandar o content de pontos para o elemento criado para pontos 
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function sobrePosição (elementoA, elementoB) {
    // retorna o tamanho do elemento e sua relação ao viewport 
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

    return horizontal && vertical
}

function colidiu (passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        const superior = parDeBarreiras.superior.elemento
        const inferior = parDeBarreiras.inferior.elemento 
        colidiu = sobrePosição(passaro.elemento, superior)
        || sobrePosição(passaro.elemento, inferior)
    })
    return colidiu
}

// função que irá chamar as funções 
function flappyBird () {
    let pontos = 0

    const areaJogo = document.querySelector('[wm-flappy]')
    const altura = areaJogo.clientHeight
    const largura = areaJogo.clientWidth

    const p = new Progresso
    const b = new Barreiras (altura, largura, 200, 400, () => p.atualizarPontos(++pontos))
    const passaro = new Passaro(altura, 8, -5)

    areaJogo.appendChild(p.elemento)
    areaJogo.appendChild(passaro.elemento)
    b.pares.forEach(par => areaJogo.appendChild(par.elemento))

    this.start = () => {
        const temporizador = setInterval(() => {
            b.animar()
            passaro.animar()

            if (colidiu(passaro, b)) {
                clearInterval(temporizador)
                location.reload()
            }
        }, 20)
    }
}

const flappy = new flappyBird()
flappy.start()