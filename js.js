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
// se o nome estiver correto e o servidor estiver ok o"status code " é 200 
}

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

function dadosChegaram(resposta) { 
    msg = resposta.data;
    renderiza();
}



