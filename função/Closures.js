const valore = 'Global'

function ApontaparaFora () {
    const valore = 'Dentro'
    function ApontaparaDentro () {
        return valore
    }
    return ApontaparaDentro()
}

const MinhaFunção = ApontaparaFora()
console.log(MinhaFunção)

/*nesse a função ApontaparaDentro irá pegar como escopo a função ApontaparaFora, e por isso o x irá 
retornar um valor diferente*/