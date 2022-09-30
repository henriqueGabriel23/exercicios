let escreva = document.getElementById('escreva')
let botao = document.getElementById('botao')
let palavra = document.getElementById('palavra')

const inverter = () =>{

    for (let index = escreva.value.length - 1; index >= 0; index--) {
        palavra.innerHTML += escreva.value[index]
        console.log(escreva.value[index]);
    }
}
botao.addEventListener('click', inverter)