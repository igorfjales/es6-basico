/**
 *  OBJECT SHORT SYNTAX
 * 
 *  Quando o nome de uma variável que queremos passar como valor para um atributo de um objeto tiver
 *  o mesmo nome desse atributo, não há necessidade de repetição.
 * 
 *  Exemplo:
 
const nome = 'Igor';
const idade = 20;

const usuario = {
    nome: nome,         -> variável e atributo com nomes iguais.
    idade: idade,       -> variável e atributo com nomes iguais.
    empresa: 'JLS Tech',
};
console.log(usuario);
 */

const nome = 'Igor';
const idade = 20;

const usuario = {
    nome,           // só colocamos uma vez, deixando mais simplificado.
    idade,
    empresa: 'JLS Tech',
};
console.log(usuario);