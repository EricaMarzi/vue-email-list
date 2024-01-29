/**
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati. (per testare il funzionamento di questo bonus, provate a rallentare la connessione col tab network, mettendo lo slow 3g)
 */

const {createApp} = Vue;

//& Boolean API
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = createApp ({
    data: () => ({
        emailList: []
    }),
    created() {
        for(let i = 0; i < 10; i++) {
            axios.get(endpoint).then(res => {
                //* Da eseguire in caso di successo
                
                //& Ciclo per avere più indirizzi
                this.emailList.push(res.data.response);
            })
            .catch((err) => {
                //! Da eseguire in caso di errore (es un alert)
                alert(err)
            })
            .then(() => {
                //^ Da eseguire in ogni caso (es un loading)
            })
        }
    }
});

app.mount('#root');