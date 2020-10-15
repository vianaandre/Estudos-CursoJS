const numeroPositivos = {
    _numero: 2,
    get numero() { return this._numero++},
    set numero(numero) {
        if (numero > this._numero) {
            this._numero = numero
        }
    }

}
console.log(numeroPositivos.numero, numeroPositivos.numero, numeroPositivos.numero)
numeroPositivos.numero = 10
console.log(numeroPositivos.numero, numeroPositivos.numero)
numeroPositivos.numero = 9
console.log(numeroPositivos.numero, numeroPositivos.numero)