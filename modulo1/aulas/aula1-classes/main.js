class List {
    /* O constructor é o primeiro método executado toda vez que se instanciar um objeto a partir da classe.
       Podemos criar ações que disparam assim que o objeto é criado ou realizar a inicialização de variáveis.*/
    constructor() {
        this.data = []
    }

    // Declaração de métodos dentro da classe
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

/* A classe TodoList herda tudo da class List.
   com a herança, além de herdar o que a classe pai possui, podemos adicionar mais coisas na classe filha,
   como métodos e variáveis que a classe pai não possui.*/
class TodoList extends List {
    constructor() {
        // O comando abaixo chama o constructor da classe pai
        super();

        this.usuario = 'Igor';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

// Instanciando o objeto
const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();



/**
 *  MÉTODOS ESTÁTICOS
 *
 *  Métodos estáticos não enxergam o restante da classe. Eles servem para passarmos uma informação
 *  e ele nos retornar outra independente do restante da classe.
 *
 *  Exemplo:
 *
 *  No caso abaixo, irá dar erro pois não iríamos conseguir acessar o 'this.todos' mesmo que existisse na classe,
 *  porque métodos estáticos não enxergam propriedades da classe em que está inserido.
 *
 *  static addTodo(){
 *  this.todos.push('Novo Todo')
 *  console.log(this.todos);
 *  }
 *
 *  Exemplo que daria certo:
 *
 *  class Matematica(){
 *  static soma(numero1, numero2) {
 *      return numero1 + numero2
 *      }
 *    }
 *
 *  console.log(Matematica.soma(1, 2));
 *
 */