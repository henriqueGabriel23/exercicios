
let CEP = document.getElementById('CEP')
let ESTADO = document.getElementById('UF')
let CIDADE = document.getElementById('localidade')
let BAIRRO = document.getElementById('Bairro')
let ENDEREÇO = document.getElementById('logradouro')

const consultarCEP = (cep) => {
    var endpoint = 'https://viacep.com.br/ws/'+cep+'/json/';
    fetch(endpoint,{
        method: 'GET',
        headers: { 'Content-Type': "application/json" },
    })
        .then(Response => Response.json())
        .then(Result => {
            ESTADO.value = Result.uf
            CIDADE.value = Result.localidade
            BAIRRO.value = Result.bairro
            ENDEREÇO.value = Result.logradouro
        })
        .catch(erro => console.log(erro));
}

CEP.addEventListener('input', () => {

    if (CEP.value.length > 7) {
        consultarCEP(CEP.value)
    }
})
