//UM OBJETO FUNCIONA COM UMA SEQUENCIA DE CHAVES + VALOR 
const obj1 = {}//VALIDA UM OBJETO
obj1.Vendo = 'Notebook'  //CHAVES MAIS VALOR
obj1.Marca = 'Lenovo ideapad 320'
obj1.Valor = 3999
obj1['Desconto a vista'] = 5//PODE SER USADO DESSA FORMA TAMBÉM PARA NOMEAR OS OBJETOS 

console.log(obj1)

const up = texto => texto.toUpperCase()
console.log(`${up('especificações')}`)

const obj2 = {//PODE SER USADO ASSIM TAMBÉM, COM SENTENÇAS DE CÓDIGOS DENTRO DE CHAVES 
    Processador: 'i5 de 8 geração',
    Ram: '8 gb de memoria ram'
}

console.log(obj2)
/*
NO OBJETO VOCE PODE CRIAR UMA ARVORE DE CHAVES, PORÉM SEMPRE SIGA A SEQUENCIA DE CHAVES VALOR 
*/

