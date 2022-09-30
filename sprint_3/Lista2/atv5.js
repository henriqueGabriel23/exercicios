let Celsius = document.getElementById('Celsius')
let Fahrenheir = document.getElementById('Fahrenheir')
let temperatura_convertida1 = document.getElementById('temperatura_convertida1')
let temperatura_convertida2 = document.getElementById('temperatura_convertida2')
let Botao_1 = document.getElementById('botao1')
let Botao_2 = document.getElementById('botao2')


const Fahrenheir_para_Celsius = () =>{
let Celsius2 = 0;
Celsius2 = (Fahrenheir.value - 32) / 1.8;
temperatura_convertida2.innerHTML = Celsius2
console.log(Fahrenheir.value);

}

const Celsius_para_Fahrenheir= () =>{
let Fahrenheir2 = 0;
Fahrenheir2 = Celsius.value * 1.8 + 32
temperatura_convertida1.innerHTML = Fahrenheir2


}


Botao_1.addEventListener('click', Celsius_para_Fahrenheir)
Botao_2.addEventListener('click', Fahrenheir_para_Celsius)

