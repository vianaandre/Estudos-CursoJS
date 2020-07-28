const [a] = [20.43] // Sintaxe para trabalhar com destructuring 
console.log(a);

const [n1, , n3, n4, n5, n6 = 10] = ['Burro', 9, 5, 6] // Os valores são dados pelas posições n...
console.log(n4, n1, n3, n5, n6); // Lembrando que os valores são dados pelas posições 

const [, [, b1], b2 = 9 ]= [[2.4], [3.6, 7]] //nunca use isso, é extremamente dificil de ler 
console.log(b1, b2);