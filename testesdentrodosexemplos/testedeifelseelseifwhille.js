function teste (a) {
        if (!!a){
            console.log('verdadeiro')
        }
}
teste(null)

function teste2 (a, b) {
    if (a == b){
        console.log(a + '=' + b)
    }else{
        console.log(a + '!=' + b)
    }
}
teste2('lindo', 'feio') //até com strings funciona (parabens javascript)

