// funcionalidade imposta pelo ES2015

const dados = {
    nome: 'André',
    idade: 17,
    sexo: 'Masculino',
    Hobby: 'series',
    Estudos: 'Programação',
    Pessoas: 'Familia',
    contas: {
        Streming: 'Netflix',
        Music: 'Spotifyn', 
        Jogos: 'EAacess'
    }
}

const { nome, idade } = dados // Serve para pegar valores especificos dentro de um objeto 
console.log('Me chamo ' + nome + ' e tenho ' + idade)

const { Hobby: h, Estudos: e} = dados 
console.log('Na hora de estudar gosto muito de me envolver com ' + e + ' e na hora do lazer amo assistir ' + h );

const { sobrenome = true, Bemhumarado = false} = dados /* Funciona porque eu atribui um valor a elas, caso não tivesse 
atribuido iria dar underfined*/
console.log(sobrenome, Bemhumarado); 

const { contas: { Streming, Music, Jogos}} = dados // Para acessar estruturas especificas dentro de um obejto 
console.log('Você escuta musicas de qual plataforma: ' + Music);
console.log('Você assiste filmes e series de qual plaforma: ' + Streming);

/* Outro ponto é que para voce não dar erro, voce deve garantir que vai existir um dado até voce atribuir o ultimo 
dado de um destructuring*/


