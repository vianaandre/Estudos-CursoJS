let comparando = function(param) {
    console.log(this === param)
} 
comparando(global) // nesse contexto de this dentro de uma função dentro de uma varivel, this será global

let comparando2 = param1 => {console.log(param1===this)}
comparando2(global)// já nesse o this estara atrelado ao contexto da função 
