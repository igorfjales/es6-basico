/**
 *  OPERADORES REST E SPREAD
 * 
 *  REST - Serve pra pegar o resto das propriedades
 * 
 *  SPREAD - Usado para propagar informações entre diferentes estruturas
 */


// REST:
console.log('REST:')

// EXEMPLO 1
const usuario = {
   nome: 'Igor',
   idade: 20,
   empresa: 'JLS Tech'
};

const { nome, ...resto } = usuario; // O resto das propriedades, fora o nome, são atribuídas à variável 'resto'.

console.log(nome);
console.log(resto);

// EXEMPLO 2
// Também conseguimos aplicar esse conceito em arrays:

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

// EXEMPLO 3
/*
Também conseguimos aplicar esse conceito para parâmetros de funções:

Exemplo de uma forma trabalhosa de fazermos operações abaixo:

function soma(a, b, c, d) {
   return a + b + c + d;
}

console.log(soma(1, 2, 3, 4));
*/

function soma(...params) {
   return params.reduce((total, next) => total + next);
}

console.log(1, 2, 3, 4);

function exibeResto(a, b, ...c) {
   return c;
}

console.log(exibeResto(1, 2, 3, 6, 9));


// SPREAD
console.log('SPREAD:')

// EXEMPLO 1

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // Faz a junção do arr1 com o arr2, propogando suas estruturas através dos '...'
console.log(arr3);

// EXEMPLO 2

const usuario1 = {
   nome: 'Igor',
   idade: 20,
   empresa: 'JLS Tech'
};

const usuario2 = { ...usuario1, nome: 'Jales' }; // Copia a estrutura e os valores do user1 e sobrepõe apenas o nome.
console.log(usuario2);