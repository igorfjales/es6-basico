/*

VALORES PADRÃO PARA UMA FUNÇÃO

Exemplo:

function soma(a, b) {
   return a + b;
}

console.log(soma(1)); -> Irá imprimir NaN
console.log(soma());  -> Irá imprimir NaN

*/

/* Podemos resolver problemas como o de exemplo colocando valores padrão para as funções
   
 Exemplo na função tradicional abaixo
*/

function soma(a = 3, b = 2) {
   return a + b;
}
console.log('Soma:')
console.log(soma());
console.log(soma(1)); // se passarmos só um valor, irá substituir o primeiro valor padrão para o que estamos passando
console.log(soma(2, 2));  // Substitui os dois valores padrão.

// Tambem conseguimos aplicar esse conceito nas Arrow Functions.
const subtração = (a = 5, b = 2) => a - b;

console.log('Subtração:')
console.log(subtração());
console.log(subtração(6));
console.log(subtração(7, 2));