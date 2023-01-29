const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
promise.then(processaResposta); // agenda a execucao de uma função quando a resposta do servidor chegar
promise.catch(processaRespostaErro);    
function processaResposta(resposta){
        
    const lista = document.querySelector('sala');
    lista.innerHTML = '';

    ///console.log(resposta.data);
    for (let i = 0; i < resposta.data.length; i++){
        let receita = resposta.data[i];
        lista.innerHTML = lista.innerHTML +
         `<div>${}</div>`;
    }
    console.log(resposta)
}
function processaRespostaErro(erro){
    console.log(erro)
}
//const elementoQueQueroQueApareca = document.querySelector('.mensagem');
//elementoQueQueroQueApareca.scrollIntoView();


  function verificarSeTemEsseNome(){
    peganome = prompt('qual o seu nome?')
    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants');
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




/*function pegarReceitas(){
    console.log('antes do axios.get');
    
    console.log('depois do axios.get');
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(processaResposta); // agenda a execucao de uma função quando a resposta do servidor chegar
    promise.catch(processaRespostaErro);    

}
pegarReceitas();*/



function carregarMensagens(){
    console.log('enviando o pedido');
    // promise da função carregarMensagens - escopo é local 
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(renderizarMensagens);
}

function erroRegistroUsuario(erro){
    console.log(erro);
}

function registrouUsuario(resposta){
    console.log(resposta);    
}
carregarMensagens();





function carrega(verificar){
    console.log(verificar)
    const msgantigas = verificar.data 
    console.log(msgantigas)

    const minhalista = document.querySelector('.sala')
    minhalista.innerHTML='';

    for(let i = 0 ; i < msgantigas.length ;i++) 
    {
        let objetos = msgantigas[i];
        console.log('entrei')
        let padrao = `
        <li class="msg cinza">
        <div class="hora">(${objetos.time})</div>
        <div class="quem">${objetos.from} </div>
        <div class="tipo">para</div>
        <div class="para">${objetos.to}</div>
        <div class="texto">${objetos.text}</div>
    </li>
        `
        minhalista.innerHTML += padrao
    }
}
function buscarmsg(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');

    promise.then(carrega)
}

function renderizar(){
    console.log('consegui')
    


    buscarmsg();
}
renderizar();

function pedirnome(){
    peganome = prompt('qual o seu nome?');
};
pedirnome()

    //const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants');

function carrega(verificar){
    const msgantigas = verificar.data 
    const minhalista = document.querySelector('.sala')
    minhalista.innerHTML='';
    for(let i = 0 ; i < msgantigas.length ;i++) 
    {  
        if(objetos.data[i].type === "status"){
            minhalista.innerHTML
        
        `
        <li class="msg cinza">
        <div class="hora">(${objetos.time})</div>
        <div class="quem">${objetos.from} </div>
        <div class="texto">${objetos.text}</div>
    </li>
        `
    }
    else if (objetos.from === 'Todos' ){
            
        padrao = `
        <li class="msg rosa">
        <div class="hora">(${objetos.time})</div>
        <div class="quem">${objetos.from} </div>
        <div class="tipo">para</div>
        <div class="para">${objetos.to}</div>
        <div class="texto">${objetos.text}</div>
        </li>
        `;
    }
    else if (objetos.to === 'Todos'){

        padrao = `
        <li class="msg branca">
        <div class="hora">(${objetos.time})</div>
        <div class="quem">${objetos.from} </div>
        <div class="tipo">para</div>
        <div class="para">${objetos.to}</div>
        <div class="texto">${objetos.text}</div>
        </li>
        `;
    }  
    minhalista.innerHTML += padrao
}
}




//

function carrega(verificar){
    console.log(verificar)
    const msgantigas = verificar.data 
    console.log(msgantigas)

    const minhalista = document.querySelector('.sala')
    minhalista.innerHTML='';

    for(let i = 0 ; i < msgantigas.length ;i++) 
    {
        let objetos = msgantigas[i];
        let padrao ;

        if ( mensagem.to !== 'Todos'){
        
            padrao =
            `
            <li class="conversa-publica"  data-test="message">
            <span class="horario">( ${objetos.time} )</span>
                <strong>${objetos.from}</strong>
                <span> para </span>
                <strong>${objetos.to}: </strong>
            <span>${objetos.text}</span>
        </li>        
                     
            `;

        }else if ( mensagem.from === null ){
            padrao =
            `
            <li class="entrada-saida"  data-test="message">
                    <span class="horario">( ${objetos.time} )</span>
                    <strong>( ${objetos.from} )</strong>          
                    <span>${objetos.text}</span>            
                </li>
            `
        }else if ( mensagem.to === 'Todos'){
            padrao = `
            <li class="conversa-privada"  data-test="message">
                    <span class="horario">( ${objetos.time} )</span>
                        <strong>${objetos}</strong>
                            <span> reservadamente para </span>
                        <strong>${objetos.to}: </strong>
                    <span>${objetos.text}</span>
                </li>
            `;
        }


        minhalista.innerHTML += padrao
    }
}


let usuario;
function buscarmsg(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(carrega)
}

function msgChegaram(resposta){
    console.log('chegaram!!!!!!');
    console.log(resposta);
}

function deuErroPegarmsg(erro){
    console.log('Deu erro ao pergar no servidor');
    console.log(erro);
}


function coloqueinome(){

   const promise =  axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', {name:usuario})

   promise.then(msgChegaram);
    promise.catch(deuErroPegarmsg);
}
function msgChegaram2(resposta2){
    console.log('status ok');
    console.log(resposta2);
}

function deuErroPegarmsg2(erro2){
    console.log('Deu erro ao pergar no status');
    console.log(erro2);
}

function atualizar(){
    const promise =  axios.post('https://mock-api.driven.com.br/api/v6/uol/status', {name:usuario})
    
    promise.then(msgChegaram2);
    promise.catch(deuErroPegarmsg2);
}

function renderizar(){
    usuario = prompt('qual o seu nome?');
buscarmsg();
coloqueinome();

setInterval(atualizar,3000);
}
renderizar();


