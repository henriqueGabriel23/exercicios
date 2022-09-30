let altura = document.getElementById('Altura')
let Peso =   document.getElementById('Peso')
let Botao =  document.getElementById('Botao')
let Resultado = 0;


const Calcular = () =>{

    Resultado = Peso.value / altura.value ** 2
    alert(Resultado)
    
}

Botao.addEventListener('click', Calcular)
