let Rua = document.getElementById ('input_Rua')
let Mostra_CEP = document.getElementById('CEP')
const consultarRUA = (logradouro) => {
    var endpoint = 'https://viacep.com.br/ws/SP/Sao paulo/'+logradouro+'/json/';
    fetch(endpoint,{
        method: 'GET',
        headers: { 'Content-Type': "application/json" },
    })
        .then(Response => Response.json())
        .then(Result => {console.log(Result[0]);
           Mostra_CEP.innerHTML = Result[0].cep
           
        })
        .catch(erro => console.log(erro));
}
Rua.addEventListener('input', () => {
    consultarRUA(Rua.value)
    
})
