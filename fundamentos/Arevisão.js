let nome = "André";
var sobrenome = "Gustavo";
const letras = "Meu nome é ";

const template = `Olá, ${letras}${nome} ${sobrenome}`;

console.log(template);

function exponenciação(a = 0, b = 0) {
  return a * Math.pow(b, 4);
}
console.log(exponenciação(1, 6));

const imparpar = (imparpar) => console.log(imparpar % 2);
imparpar(29);
const altura = (h) => console.log(h);
altura(1.9);
var soma = (a, b) => a * b;
console.log(soma(1, 2));

const valores = [1.98, 1.76, 1.8, 1.6];
console.log(valores[0], valores[2]);
valores[4] = "Dedé";
console.log(valores[4]);
valores.push = ({ id: 10 }, 21, 22);
console.log(valores.length);
console.log(valores);
const [a, b, e, t, h] = [12, 45, "André", , 44];
console.log(e);
const lindo = a + b;
console.log(lindo);
console.log(typeof valores);

const objt = {};
objt.and = "Sandra";
objt.lindo = "André";
console.log(objt);
console.log(objt.and);

const obj1 = {
  name: "André",
  segundo: "Viana",
  idade: 17,
  anos: "anos",
};
const { name, segundo } = obj1;
console.log("Meu nome é " + name + " " + segundo);
