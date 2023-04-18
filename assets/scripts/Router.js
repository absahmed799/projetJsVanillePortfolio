
import { afficheProjetParId } from './ProjetService.js';


export default class Router {
    #_el;
    #_elProjet;
    #_routes;
    #_elTitre;
    #_domain;
    constructor(el) {

        this.#_el = el;
        this.#_elTitre = this.#_el.querySelector('h1');
        this.#_elProjet = this.#_el.querySelector('[data-js-projets]');

        this.#_routes = [
            ['/projets/:id', afficheProjetParId]
        ]
        //https://stackoverflow.com/questions/1034621/get-the-current-url-with-javascript
        if (location.hostname == 'localhost') {
            this.#_domain = `${location.pathname.substring(0, location.pathname.lastIndexOf('cours-19/'))}cours-19/`;
        } else {
            this.#_domain = location.pathname;
        }
        this.#init();
    }
    /**
     * Initialisation des comportements
     */
    #init() {
        /***
         * compertement de chargement de page
         */
        this.#gereHashbang();
        //if(id) this.#equipeSelectionnee(id);
        /**
         * comportement suite click du titre
         */
        this.#_elTitre.addEventListener('click', function () {
            e.preventDefault();
            console.log('accueil');
            history.pushState({ etat: 'accueil' }, null, this.#_domain)

            this.#_elProjet.innerHTML = '';
        }.bind(this))


        /**
         * comportement suite click du projet
         */
        this.#_elProjet.addEventListener('click', function (e) {
            e.preventDefault();

            let id = e.target.dataset.jsProjetId
            //console.log(id);
            if (id != 0) location = `#!/projets/${id}`;

            console.log('click bon');
        }.bind(this))





        /**
         * Comportement suite a la l'evenement hashchange
         */

        window.addEventListener('hashchange', function () {
            this.#gereHashbang();
           

        }.bind(this));
    }


    #gereHashbang() {

        let hash = location.hash.slice(2),
            isRoute = false,
            isID = false;
        if (hash.endsWith('/')) hash = hash.slice(0, -1);

        for (let i = 0; i < this.#_routes.length; i++) {
            let route = this.#_routes[i][0],
                isID = false;

            if (route.indexOf(':') > -1) {

                route = route.substring(0, route.indexOf('/:'));
                isID = true;
            }

            if (hash.indexOf(route) > -1) {

                let hashInArray = hash.split(route);
                if (hashInArray[1] != '') {
                    if (isID) {
                        let id = hashInArray[1].slice(1);
                        this.#_routes[i][1](id);
                        isRoute = true;
                        return id;
                    }
                } else {
                    if (hash == this.#_routes[i][0]) {
                        this.#_routes[i][1]();
                        isRoute = true;
                    }
                }
            }

        }


        if (!isRoute) {

        }

    }


}



