/**
 *  IMPORT E EXPORT
 * 
 *  'export' - Exporta um objeto para que possa ser usado em outro arquivo.
 * 
 *  'import' - Importa o objeto para dentro do arquivo atual, para podermos utilzar seus atributos e funcionalidades.
 * 
 *  EXPORT DEFAULT
 *  - A diferença para o 'export' tradicional, é que o arquivo que exporta algo por padrão, só exporta 1 determinado
 *    objeto. E na sua importação, não precisamos colocar chave em volta e podemos atribuir qualquer nome.
 */

import { soma, subtracao } from './funcoes'; // está importando tais funções do arquivo funcoes.js

import sum from './soma'; /* Observe que 'sum' foi importando de dentro do arquvio soma.js.
                             Dentro desse arquivo, só exportamos uma determinada funcionalidade por padrão,
                             que é uma função com o nome de 'soma'. Repare que na sua importação
                             nesse arquivo atual 'main', não utilizamos as chaves em volta e tro-
                             camos o nome da função declarada dentro do arquivo 'soma.js'.*/


console.log(soma(1, 2));
console.log(subtracao(4, 2));

console.log(sum(1, 2));


/**
 * OBS 1: Se nós quisermos renomear a função, como fazemos no caso 'export default' utilizando o 'export' 
 * tradicional, temos que utilizar a seguinte sintaxe:
 *  
 *  import { soma as sum, subtracao as sub } from './funcoes';
 * 
 *  'soma as sum' informa que estamos apelidando o objeto 'soma' como 'sum'.
 *  'subtracao as sub' informa que estamos apelidando o objeto 'subtracao' como 'sub'.
 * 
 *  A partir disso, conseguimos referenciar tal objeto pelo seu apelido e utilizar suas funcionalidades.
 * 
 *  OBS 2: Dentro de um arquivo podemos ter 'EXPORT DEFAULT' e 'EXPORT' tradicional ao mesmo tempo. Os obejtos que
 *  tiverem só 'EXPORT' antes, na sua importação, deverão utilzar exatamente seus nomes declarados iguais
 *  e entre chaves, já o que tiver 'EXPORT DEFAULT', pode trocar de nome e não utilizar as chaves em volta.
 * 
 *  EXEMPLO: 
 *  import soma, { subtracao } from './funcoes';
 * 
 *  OBS 3: Se dentro de um determinado arquivo tivermos muitos 'exports' tradicionais, e não quisermos importar
 *  de um por um, podemos utilizar a seguinte sintaxe:
 * 
 *  import * as funcoes from './funcoes'
 *  console.log(funcoes.soma(1, 2));
 *  console.log(funcoes.subtracao(4, 2));
 */
