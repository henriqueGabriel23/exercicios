// promise
// then - aceita
// catch - recusa 

let CEP = document.getElementById('CEP')
let CIDADE = document.getElementById('Cidade')


const consultarCEP = (cep) => {
    var endpoint = 'https://viacep.com.br/ws/'+cep+'/json/';
    fetch(endpoint,{
        method: 'GET',
        headers: { 'Content-Type': "application/json" },
    })
        .then(Response => Response.json())
        .then(Result => {
            CIDADE.value = Result.localidade
            CIDADE.innerHTML += CIDADE.value + '<br>'

        })
        .catch(erro => console.log(erro));
}

CEP.addEventListener('input', () => {

    if (CEP.value.length > 7) {
        consultarCEP(CEP.value)
    }
})





