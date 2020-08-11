function anos() {
    this.idade = 0 

    const self = this 
    setInterval(function() { //setinterval faz com os numeros sejam sequenciados em intervalos 
        self.idade++ 
        console.log(self.idade)
    }, 1000)
}

new anos // modo de chamar uma função  