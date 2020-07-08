/**
 *  DESESTRUTURAÇÃO DE OBJETOS
 */

const usuario = {
   nome: 'Igor',
   idade: 20,
   endereco: {
      cidade: 'Recife',
      estado: 'PE',
   },
};

console.log(usuario);

// Modo tradicional, sem desestruturação:
const nomeUser = usuario.nome;
const idadeUser = usuario.idade;
const cidadeUser = usuario.endereco.cidade;

console.log(nomeUser, idadeUser, cidadeUser);

// Com desestruturação:

const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome, idade, cidade);

// const { cidade, estado } = usuario.endereco; -> Também iríamos conseguir pegar as informações de endereço dessa forma

// Também conseguimos usar desestruturação dentro dos parâmetros das funções:

function mostraDados({ nome, idade }) {
   console.log(nome, idade);
}

mostraDados(usuario); // Perceba que passamos o objeto completo e nos parâmetros da função ele é desestruturado