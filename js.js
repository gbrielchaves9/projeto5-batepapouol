//const elementoQueQueroQueApareca = document.querySelector('.mensagem');
//elementoQueQueroQueApareca.scrollIntoView();


pegarmsgNoServidor();
function pegarmsgNoServidor(){

    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(msgChegaram);
    promise.catch(deuErroPegarmsg);

}

function msgChegaram(resposta){
    console.log('chegaram!!!!!!');
    console.log(resposta);

}

function deuErroPegarmsg(erro){
    console.log('Deu erro ao pergar no servidor');
    console.log(erro);
}