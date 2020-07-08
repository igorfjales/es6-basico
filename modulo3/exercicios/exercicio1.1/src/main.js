/*
Transforme o seguinte trecho de código utilizando async/await:

import axios from 'axios';
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
getUserFromGithub('igorfjales');
getUserFromGithub('igorfjales_errado');

*/

import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        let response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}
getUserFromGithub('igorfjales');
getUserFromGithub('igorfjales_errado');