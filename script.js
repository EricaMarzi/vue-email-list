/**
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
In un'applicazione Vue, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. (per testare il funzionamento di questo bonus, provate a rallentare la connessione col tab network, mettendo lo slow 3g)
 */

const {createApp} = Vue;

//& Boolean API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = createApp ({
    data: () => ({}),
    created() {
        axios.get(endpoint).then(res => {
            //* Da eseguire in caso di successo
            console.log(res.data)
        })
        .catch((err) => {
            //! Da eseguire in caso di errore (es un alert)
        })
        .then(() => {
            //^ Da eseguire in ogni caso (es un loading)
        })
    }
});

app.mount('#root');