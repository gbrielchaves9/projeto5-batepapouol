let msg = [];
function pergarDados(resposta) { 
    console.log(resposta)
    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promessa.then(dadosChegaram) 
}
pergarDados()  
function dadosChegaram(resposta) { 
    msg = resposta.data;
    renderiza();
}
renderiza();
function renderiza(){   
    const ul = document.querySelector('.sala');
    ul.innerHTML = "";
    for( let i=0; i < msg.length; i++){
        const from = msg[i].from;
        const to = msg[i].to;        
        const text = msg[i].text;
        const type = msg[i].type;        
        const time = msg[i].time;
        if( type === 'status'){
            ul.innerHTML += `
            <li class="msg cinza">
            <span class="horario">${time}</span>
            <p>
                <strong class="quem">${from}</strong>
                ${text}
            </p>
        </li>
            ` 
        } else if( type === 'message'){
            ul.innerHTML += `
             <li class="msg branca">
            <span class="horario">${time}</span>
            <p>
                <strong class="quem">${from}</strong>
                 para <strong class="para">${to}</strong>:
                  ${text}
            </p>
        </li>
            `
        } else if( type === 'private_message'){
            ul.innerHTML += `
            <li class="msg rosa ">
            <span class="horario">${time}</span>
            <p>
                <strong class="quem">${from}</strong>
                 reservadamente para <strong class="para">${to}</strong>:
                  ${text}
            </p>
        </li>
            `
        };
    };
};
let usuario;
function buscarmsg(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(renderiza)
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
