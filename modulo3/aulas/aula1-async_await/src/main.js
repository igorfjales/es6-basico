/**
 *  ASYNC / AWAIT
 * 
 *  - ASYNC = Determinamos que uma função é assíncrona. Quando isso acontece, a função vira uma Promise.
 * 
 *  - AWAIT = Utilizamos para executar determinada função que pode levar algum tempo e a próxima linha de código
 *    só irá executar após o termino da função que contém o 'await' a precedendo. 
 * 
 *   OBS: Só conseguimos usar o await em funções declaradas como 'async'.
 */

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

const executaPromise = async () => {
    console.log(await minhaPromise());  // 2s para executar
    console.log(await minhaPromise());  // Espera a linha anterior executar, para começar executar tbm, (4s)
    console.log(await minhaPromise());  // 6s para executar pois espera todas as linhas ateriores.
};

executaPromise();

/*
Usando a sintaxe anterior para obter o mesmo resultado:

minhaPromise().then(response => {
        console.log(response);
    })

minhaPromise().then(response => {
        console.log(response);
    })

minhaPromise().then(response => {
        console.log(response);
    })
*/