/**
 *  ARROW FUNCTIONS
 * 
 *  Possui sintaxe mais curta em relação às declarações de funções tradicionais.
 */

const arr = [1, 3, 4, 5, 6];

// Função anônima que usamos no modo tradicional
var newArr = arr.map(function (item) {
    return item * 2;
});
console.log('Função anônima tradicional: ', newArr);

/* Primeiro modo para se usar Arrow Function
   - Removemos a keyword 'function' e adicionamos a 'flecha =>' após os parâmetros da função.
*/
newArr = arr.map((item) => {
    return item * 2;
});
console.log('Arrow function primeiro modo: ', newArr);

/* Segundo modo: quando uma arrow function possui apenas um parâmetro, conseguimos remover 
   os parênteses em torno dele. Nesse caso, 'item'.
*/
newArr = arr.map(item => {
    return item * 2;
});
console.log('Arrow function segundo modo: ', newArr);

/* Terceiro modo: Quando o retorno da função for concebido em apenas UMA linha, conseguimos remover a keyword 'return'
   e colocar o retorno da função logo após a flecha.
*/
newArr = arr.map(item => item * 2);
console.log('Arrow function terceiro modo: ', newArr);

// Outros exemplos:

const teste = () => 'teste';
console.log(teste());

/* Se quisermos retornar um OBJETO no formato da arrow function descrita no mesmo exemplo acima, devemos colocar 
   o objeto entre parênteses.
*/
const testeObj = () => ({ nome: 'Igor' });
console.log(testeObj());