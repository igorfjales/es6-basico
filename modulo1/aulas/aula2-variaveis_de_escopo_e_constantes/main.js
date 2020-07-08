/**
 * Constantes e variáveis de escopo
 * 
 * var / const / let
 * 
 * const -> Não pode ter seu valor reatribuído. No entanto, podemos mutar o seu valor.
 *  Exemplo de erro:
 *  const numero = 1;
 *  numero = 2;
 * 
 *  var -> Declaração de variáveis com um escopo global.
 * 
 *  let -> Declaração de variáveis com um escopo específico, como dentro de funções, métodos, IFs, FOR's, etc...
 */

// Exemplo de const com valor mutável:
const usuario = { nome: 'Igor' }
usuario.nome = 'Jales';
console.log(usuario.nome);

// Exemplo let
function teste(numero1) {
    let numero2 = 2;

    if (numero1 > 5) {
        console.log(numero1, numero2);
    }
}
/* conseguimos ter acesso a variável 'numero2' dentro de todo o escopo da função. Mas se tentarmos acessar seu valor
   fora desse escopo, irá ocorrer erro.
   
   O escopo é delimitado pelas chaves ' { } '.
   */


teste(10);
// console.log(numero2) -> erro.