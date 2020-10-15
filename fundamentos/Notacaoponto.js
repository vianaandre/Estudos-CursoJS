console.log(Math.ceil(5.9))//arrendonda para cima 
console.log(Math.floor(5.8))//arrendonda para baixo
console.log(typeof Math)

const obj1 = {}
obj1.nome = 'BOLA'
console.log(obj1.nome)//posso pegar um atributo especifico declarado dentro de um objeto

function Obj(nome){
    this.nome = nome //torna um parametro privado global 
    this.exec = function() {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
const obj4 = new Obj('Lindo')
console.log(obj2.nome);
console.log(obj3.nome);
console.log(obj4.nome);
obj3.exec()

/*NOTAÇÃO PONTO TEM HAVER COM VOCE PODE ACESSAR VALORES NOMEADOS DENTRO DE UM OBJETO OU FUNÇÃO, USANDO O NOME 
DA FUNÇÃO OU DO OBJETO E O PONTO*/



