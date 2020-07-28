function teste1 (num=0) {
    if (num > 7) 
        console.log(num)
    // como não foi colocado blocos de códigos, ele não respeitou a condição e imprimiu o final
    console.log('Final')
}

teste1(4)
teste1(8)

function teste2 (soma) {
    if (soma > 4); // cuidado com o ';', evite usar com as estruturas de controles 
    console.log(soma)
}

teste2(2)
teste2(6)

