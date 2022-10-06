let Nome = document.getElementById('nome')
let Peso = document.getElementById('peso')
let Altura = document.getElementById('altura')
let Tipo = document.getElementById('tipo')

const Pokemon = () => {
    var endpoint = 'https://pokeapi.co/api/v2/pokemon/rattata';
    fetch(endpoint,{
        method: 'GET',
        headers: { 'Content-Type': "application/json" },
    })
        .then(Response => Response.json())
        .then(Result => { 
            console.log(Result);
            Nome.innerHTML = Result.name
            Peso.innerHTML = Result.weight
            Altura.innerHTML = Result.height
            Tipo.innerHTML = Result.types[0].type.name
           
        })
        .catch(erro => console.log(erro));
        
}
Pokemon()



//Peso = weight:85
//Altura =height:6