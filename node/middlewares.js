// middleware patterns (chain of responsibility)

const passoA = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passoB = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passoC = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPassos = indice => {
        /**
         * verficou o array 
         * criou a condição basica 
         * pegou o indice 
         * pegou o contexto
         * pegou o indice seguinte para voltar para o loop 
         */
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPassos(indice + 1))
    }
    execPassos(0)
}

const ctx = {}
exec(ctx, passoA, passoB, passoC)
console.log(ctx)
