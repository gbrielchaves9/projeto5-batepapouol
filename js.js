function carrega(verificar){
    const msgantigas = verificar.data 
    const minhalista = document.querySelector('.sala')
    minhalista.innerHTML='';
    for(let i = 0 ; i < msgantigas.length ;i++) 
    {
        let objetos = msgantigas[i];
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
    const elementoQueQueroQueApareca = document.querySelector('.msg');
elementoQueQueroQueApareca.scrollIntoView();
}
function buscarmsg(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(carrega)
}
function renderizar(){
buscarmsg();
}
renderizar();



