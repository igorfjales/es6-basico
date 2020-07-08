/*
Transforme o seguinte trecho de código utilizando async/await:

const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}
buscaUsuario('diego3g');
*/

import axios from 'axios';

const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}
buscaUsuario('igorfjales');
buscaUsuario('igorfjales_errado');