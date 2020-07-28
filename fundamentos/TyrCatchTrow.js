function tratarerroelancar(erro) {
    throw 'erro'  // função que foi chamado pelo catch (throm: lançar)
}

function imprimirNomegritando (obj) {
    try { // identificador do erro (caso exista um erro ele passa para o catch)
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // abre um chamda para a função de trow
        tratarerroelancar(e)
    } finally { // mesmo dando certo ou não essa mesagem ira aparecer 
        console.log('final')
    }
}

const obj = { name: 'Roberto' } 
imprimirNomegritando(obj)