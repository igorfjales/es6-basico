import api from './api';

class App {
    constructor() {
        this.repositories = [];

        this.formElement = document.getElementById('repo-form');
        this.inputElement = document.querySelector('input[name=repository]');
        this.listElement = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingElement = document.createElement('span');
            loadingElement.appendChild(document.createTextNode('Carregando...'));
            loadingElement.setAttribute('id', 'loading');

            this.formElement.appendChild(loadingElement);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repositorieInput = this.inputElement.value;

        if (repositorieInput.length === 0) {
            return
        }

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repositorieInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputElement.value = '';

            this.render();
        } catch (err) {
            alert('Repositório não existe.');
        }
        this.setLoading(false);
    }

    render() {
        this.listElement.innerHTML = '';

        this.repositories.forEach(repositorie => {
            let imageElement = document.createElement('img');
            imageElement.setAttribute('src', repositorie.avatar_url);

            let titleElement = document.createElement('strong');
            titleElement.appendChild(document.createTextNode(repositorie.name));

            let descriptionElement = document.createElement('p');
            descriptionElement.appendChild(document.createTextNode(repositorie.description));

            let linkElement = document.createElement('a');
            linkElement.setAttribute('target', '_blank');
            linkElement.setAttribute('href', repositorie.html_url);
            linkElement.appendChild(document.createTextNode('Acessar'));

            let listItemElement = document.createElement('li');
            listItemElement.appendChild(imageElement);
            listItemElement.appendChild(titleElement);
            listItemElement.appendChild(descriptionElement);
            listItemElement.appendChild(linkElement);

            this.listElement.appendChild(listItemElement);
        });
    }

}

new App();