let Fatorial = document.getElementById('Fatorial')
let Botao = document.getElementById('Botao')
let Resultado = document.getElementById('Resultado')

const fatorial =()=>{    
    let valor = 1;      
for (let index = 1; index <= Fatorial.value; index++ ) {
    valor = valor * index
   Resultado.value= valor 
    Resultado.innerHTML += Resultado.value + '<br>'

}  
}
Botao.addEventListener('click', fatorial)
