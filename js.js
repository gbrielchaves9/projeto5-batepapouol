let usuario // colocar no começo do arquivo para facilitar o entendimento de variaves e constantes declaradas 
let msg = [];// cria um array vazio para carregar as msg do servidor 
function renderizar(){
    usuario = prompt('qual o seu nome?');
    while(usuario === '' || usuario === null){
        alert('nome já utilizado ou invalido  , escolha outro nome para bater um papo legal !!')
        usuario = prompt('qual o seu nome?');
    }
/* primeiro requisito :
o while vai repetir o codido enquanto nao tiver um nome valido ou ja em uso , excluimos nome vazio com (=== '')e 
tiramos o null usando (=== null) junto com o (||) para excluir as 2 opcoes ao mesmo tempo  , o while cria um laço 
repetindo  o prompt ate satisfazer ambas condicoes .
a funçao que verifica se o nome ja esta em uso o axios faz mas precisamos montar uma funçao para saber se é esse erro.
vamos verificar usando a funçao "function coloqueinome()"  */
coloqueinome();
renderiza();
 setInterval(atualizar,5000);
console.log(renderizar)
}
console.log(renderizar)

renderizar()
console.log(usuario)


function coloqueinome(){

    const promise =  axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', {name:usuario})
 
    promise.then(msgChegaram);
     promise.catch(deuErroPegarmsg);
 }

 function msgChegaram(resposta){
    console.log('chegaram!!!!!!');
    console.log(resposta);
    atualizarasala();
    setInterval(atualizarasala,5000);
// se o nome estiver correto e o servidor estiver ok o"status code " é 200 
}
atualizarasala();// essa funcao atualiza o bate papo a cada 5s , chamar elae assim que as msg carregarem 

function deuErroPegarmsg(erro){
/* se o nome ja estiver em uso o status code é 400 */
    console.log('Deu erro ao pergar no servidor');
    console.log(erro);
}
/* segundo requisito :
verificando se o usuario esta onlie , é preciso verificar a cada 5 segundos asdfas
 */
function atualizar(){
    const promise =  axios.post('https://mock-api.driven.com.br/api/v6/uol/status', {name:usuario})
    
    promise.then(msgChegaram2);
    promise.catch(deuErroPegarmsg2);
}

function msgChegaram2(resposta2){
    console.log('o usuario esta logado');
    console.log(resposta2);
}

function deuErroPegarmsg2(erro2){
    console.log('Deu erro ao verificar conexao ');
    console.log(erro2);
}
/* terceiro  requisito :
buscar  as menssagens no servidor e exibir na tela respeitando o padrao fornecido 
 */
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
            <li class="msg cinza" data-test="message">
            <span class="horario">${time}</span>
            <p>
                <strong class="quem">${from}</strong>
                ${text}
            </p>
        </li>
            ` 
        } else if( type === 'message'){
            ul.innerHTML += `
             <li class="msg branca" data-test="message">
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
            <li class="msg rosa" data-test="message">
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
renderiza();

function pergarDados(resposta) { 
    console.log(resposta)
    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promessa.then(dadosChegaram) 
    promessa.then(erroEMcarregar) 


}
pergarDados()  

function dadosChegaram(resposta) { 
    msg = resposta.data;
    renderiza();
}
function erroEMcarregar(erronaResposta){
    console.log(erronaResposta)
}
function atualizarasala(){
    const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promessa.then(NovaMsg) 
    promessa.then(erroNovaMsg) 
}
function NovaMsg(recebeu){
    console.log(recebeu)
}
function erroNovaMsg(naorecebeu){
    console.log(naorecebeu)
}
/* quarto  requisito :
enviar a mmsg !!!
 */
function enviarmsg(){
    const cavalor = document.querySelector('.editar').value;
    const fenviar = {
        from: usuario,
        to: msg,
	    text: cavalor,
	    type: "message" 
    }
    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', fenviar);
    promise.catch(erroEnviarMensagem);
    promise.then(sucessoEnviarMensagem);
}




