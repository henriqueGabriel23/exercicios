let Valor= document.getElementById('valor')
let botao= document.getElementById('botao')
let numero= document.getElementById('numero')
let Resultado = 0;

const multiplicar =() =>{
    for (let index = 0; index <= 10; index++) {
        Resultado = Valor.value * index
        numero.innerHTML += Valor.value + " X " + index + " = "+ Resultado + '<br>' 
        console.log(Resultado);
    }
    
 
}

botao.addEventListener('click', multiplicar)

