class ProjetService {
    constructor() {
        this.elTemplateProjet = document.querySelector('[data-js-projet-template]');
        this.elProjetArea = document.querySelector('[data-js-projet]');
        this.afficheProjetParId = this.afficheProjetParId.bind(this)
    }
    /**
     * appel asynchrone et affiche de chaque projet
     * @param {string} id 
     */
    afficheProjetParId(id) {

        let data = {
            id: id,
            action: 'getProjet'
        }
        let oOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }

        fetch('client-serveur/requetesAsync.php', oOptions)
            .then(function (reponse) {
                if (reponse.ok) return reponse.json()
                else throw new Error('la réponse n\'est pas ok')
            })
            .then(function (data) {

                this.elProjetArea.innerHTML = '';
                if (data) {


                    let elTemplateClone = this.elTemplateProjet.cloneNode(true);
                    for (const cle in data) {

                        let motif = new RegExp('{{' + cle + '}}', 'g')
                        elTemplateClone.innerHTML = elTemplateClone.innerHTML.replace(motif, data[cle])
                    }

                    let atrticle = document.importNode(elTemplateClone.content, true)


                    this.elProjetArea.append(atrticle);

                }
            }.bind(this))
            .catch(function (err) {
                console.log(err.message);
            })

    }
}
export const { afficheProjetParId } = new ProjetService();