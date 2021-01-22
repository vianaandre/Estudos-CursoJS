const { prototype } = require("module")

const ferrari = {
    modelo: 'f40', 
    velmax: 280
}

const volvo = {
    modelo: 'g30',
    valmax: 230,
}


console.log(ferrari.__proto__) // dessa maneira eu acesso o pai do meu objeto para buscar valores de atributos que não tenho no meu objeto
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.prototype)
console.log(Object.prototype.__proto__ === null)
console.log(ferrari.__proto__ === Object.prototype)

function meuobjeto () {
    console.log(typeof Object, typeof meuobjeto)
    console.log(Object.prototype, meuobjeto.prototype)
}
meuobjeto()




