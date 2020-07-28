const funcs = []

for (let i = 10; i < 20; i++){
    funcs.push(function(){
        console.log(i)
    })
}
/* COMO O LET ACABA RESPEITANDO A ESTRTURA DE BLOCOS, TODO A VEZ QUE SE ACRESCENTA UM NUMERO NOVO NO ELEMENTO COM O
NOME I, O LET VAI GUARDAR NA MEMORIA, E POR ISSO QUE QUANDO POXAMOS ELE PELA INDICE, ELE SE COMPORTA DIFERENTE SE 
DECLARADO COM UMA VAR */
funcs[3]()
funcs[6]()

for (var a = 1; a<=10; a++){
    const mult =  a * 10 
    console.log(mult)
}
