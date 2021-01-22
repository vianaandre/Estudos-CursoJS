var saudacao = 'Olá' //contexto léxico 1

function teste(){
    saudacao = 'eai'
    return saudacao   //contexto léxico 2 
}

console.log(teste())
console.log(saudacao);

/*no contexto léxico os nomes são endereçados em diferentes locais, eles até podem ter o mesmo 
nome, porém como eles estão em estruturas diferentes, acabam não dando problema*/ 

